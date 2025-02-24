// Update සූන්


const { cmd, commands } = require('../lib/command');
const scraper = require("../lib/scraperd");
const axios = require('axios');
const fetch = require('node-fetch');
const { fetchJson, getBuffer } = require('../lib/functions');
const { lookup } = require('mime-types');
const fs = require('fs');
const path = require('path');
const yts = require('yt-search'); // For YouTube search
const cheerio = require('cheerio'); // Import cheerio for HTML parsing


const config = require('../settings')


const xml2js = require('xml2js');


const { updateEnv, readEnv } = require('../lib/database');


const os = require("os")


cmd({
  on: "body"
}, async (conn, mek, m, { from, body, isOwner }) => {
    try {
        if (!body) return; // Check if body exists
        
        const text = await readEnv(); // Assuming text should come from readEnv
        
        if (body.toLowerCase() === text.TRIGGER_TEXT?.toLowerCase()) { // Added optional chaining
            const config = await readEnv();
            if (config.RECORDING === 'true') {
                try {
                    await conn.sendPresenceUpdate('recording', from);
                } catch (err) {
                    console.error('Error sending presence update:', err);
                }
            }
        }
    } catch (error) {
        console.error('Error in command handler:', error);
    }
});








cmd({
    pattern: "settings",
    alias: ["setting", "set"],
    desc: "Bot settings management",
    react: "⚙️",
    category: "owner"
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("Owner only command!");

    try {
        // Handle direct setting changes if command is "set"
        if (q && m.command === "set") {
            const [key, value] = q.split(':').map(item => item.trim());
            if (!key || !value) return reply("Format: set SETTING:VALUE");

            const validSettings = {
                MODE: ['public', 'private', 'group', 'inbox'],
                AUTO_SONG_SENDER: ['true', 'false'],
                AUTO_READ_STATUS: ['true', 'false'],
                AI_CHAT: ['true', 'false'],
                RECORDING: ['true', 'false'],
                READ_CMD: ['true', 'false'],
                ANTI_BAD: ['true', 'false'],
                ANTI_LINK: ['true', 'false'],
                ANTI_CALL: ['true', 'false'],
                ANTI_DELETE: ['true', 'false'],
                ANTI_BOT: ['true', 'false']
            };

            if (!validSettings[key]) {
                return reply("Invalid setting! Check settings menu.");
            }

            if (!validSettings[key].includes(value.toLowerCase())) {
                return reply(`Invalid value for ${key}! Valid values: ${validSettings[key].join('/')}`);
            }

            await updateEnv(key, value);
            reply(`✅ Updated ${key} to ${value}`);
            return reply("Type .restart for get new update ");
        }

        // Display settings menu
        const desc = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       ⚙️ *Didula MD V2* ⚙️
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┣━💼 *Work Mode* : *𝙿𝚄𝙱𝙻𝙸𝙲🌎/𝙿𝚁𝙸𝚅𝙰𝚃𝙴/𝙸𝙽𝙱𝙾𝚇/𝙶𝚁𝙾𝚄𝙿*
┣━🎵 *Auto Song* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━📝 *Auto Status* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━🤖 *AI Chat* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━⌨️ *Recording* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━🛠️ *Read Command* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━❌ *Anti Bad* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━🔗 *Anti Link* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━📞 *Anti Call* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━🗑️ *Anti Delete* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┣━🤖 *Anti Bot* : *♻️ 𝙾𝙽/𝙾𝙵𝙵*
┗━━━━━━━━━━━━━━━━━━━━━━━┛

*Available Options:*

1️⃣ *Work Mode*
   1.1 🌐 Public
   1.2 🔒 Private 
   1.3 👥 Group Only
   1.4 💬 Inbox Only

2️⃣ *Auto Song*
   2.1 ✅ On
   2.2 ❌ Off

3️⃣ *Auto Status*
   3.1 ✅ On
   3.2 ❌ Off

4️⃣ *AI Chat*
   4.1 ✅ On
   4.2 ❌ Off

5️⃣ *Recording*
   5.1 ✅ On
   5.2 ❌ Off

6️⃣ *Read Command*
   6.1 ✅ On
   6.2 ❌ Off

7️⃣ *Anti Bad*
   7.1 ✅ On
   7.2 ❌ Off

8️⃣ *Anti Link*
   8.1 ✅ On
   8.2 ❌ Off

9️⃣ *Anti Call*
   9.1 ✅ On
   9.2 ❌ Off

🔟 *Anti Delete*
   10.1 ✅ On
   10.2 ❌ Off

1️⃣1️⃣ *Anti Bot*
    11.1 ✅ On
    11.2 ❌ Off

Reply with option number to change setting`;

        const vv = await conn.sendMessage(from, { 
            image: { url: config.ALIVE_IMG }, 
            caption: desc 
        }, { quoted: mek });

        // Settings option mapping
        const settings = {
            '1.1': ['MODE', 'public'],
            '1.2': ['MODE', 'private'],
            '1.3': ['MODE', 'group'],
            '1.4': ['MODE', 'inbox'],
            '2.1': ['AUTO_SONG_SENDER', 'true'],
            '2.2': ['AUTO_SONG_SENDER', 'false'],
            '3.1': ['AUTO_READ_STATUS', 'true'],
            '3.2': ['AUTO_READ_STATUS', 'false'],
            '4.1': ['AI_CHAT', 'true'],
            '4.2': ['AI_CHAT', 'false'],
            '5.1': ['RECORDING', 'true'],
            '5.2': ['RECORDING', 'false'],
            '6.1': ['READ_CMD', 'true'],
            '6.2': ['READ_CMD', 'false'],
            '7.1': ['ANTI_BAD', 'true'],
            '7.2': ['ANTI_BAD', 'false'],
            '8.1': ['ANTI_LINK', 'true'],
            '8.2': ['ANTI_LINK', 'false'],
            '9.1': ['ANTI_CALL', 'true'],
            '9.2': ['ANTI_CALL', 'false'],
            '10.1': ['ANTI_DELETE', 'true'],
            '10.2': ['ANTI_DELETE', 'false'],
            '11.1': ['ANTI_BOT', 'true'],
            '11.2': ['ANTI_BOT', 'false']
        };

        // Handle option selection
        const optionHandler = async (msg) => {
            if (!msg.message?.extendedTextMessage?.contextInfo?.quotedMessage) return;
            if (msg.message.extendedTextMessage.contextInfo.stanzaId !== vv.key.id) return;

            const option = msg.message.extendedTextMessage.text?.trim();
            
            if (settings[option]) {
                const [setting, value] = settings[option];
                await reply(`.set ${setting}:${value}`);
                await reply("Type .restart for get new update ");
            } else {
                reply("Invalid option selected!");
            }
        };

        // Set up message listener
        const messageHandler = ({ messages }) => {
            const msg = messages[0];
            optionHandler(msg);
        };

        conn.ev.on('messages.upsert', messageHandler);

        // Clean up listener after 5 minutes
        setTimeout(() => {
            conn.ev.off('messages.upsert', messageHandler);
        }, 300000);

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key }});
        reply('Error processing request.');
    }
});


cmd({
    pattern: "movie",
    desc: "Search and show top Sinhala subtitles for films.",
    react: "🎬",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || q.trim() === "") {
            return reply("*⚠️ Please provide a movie name (E.g: .sinhalasub spider man)*");
        }

        const searchUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/search?text=${encodeURIComponent(q)}`;
        
        const fetchData = async (url, retries = 3) => {
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await axios.get(url, { timeout: 10000 });
                    return response.data;
                } catch (error) {
                    if (i === retries - 1) throw error;
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
        };

        const data = await fetchData(searchUrl);

        if (!data?.result?.data?.length) {
            return reply("*⚠️ No results found. Try including the year (E.g: .sinhalasub love 2015)*");
        }

        const topFilms = data.result.data.slice(0, 20);
        const filmsList = topFilms.map((film, index) => {
            return `${index + 1}. 🎬 *${film.title}*\n   ⭐ ${film.imdb} | 📅 ${film.year} | 📺 ${film.type}`;
        }).join("\n\n");

        const msg = `🎥 *Movie Search Results*\n\n🔍 *Query:* ${q}\n\n${filmsList}\n\n📝 *Reply with a number (1-${topFilms.length}) to select*`;

        const sentMsg = await conn.sendMessage(from, { text: msg }, { quoted: mek });

        conn.ev.once("messages.upsert", async ({ messages }) => {
            const response = messages[0];
            if (!response?.message) return;

            const userReply = response.message.conversation || response.message.extendedTextMessage?.text;
            const isReplyToBot = response.message.extendedTextMessage?.contextInfo?.stanzaId === sentMsg.key.id;

            if (!isReplyToBot || !/^\d+$/.test(userReply)) return;

            const selectedIndex = parseInt(userReply) - 1;
            if (selectedIndex < 0 || selectedIndex >= topFilms.length) {
                return reply("*❌ Invalid selection. Please choose a number between 1-20*");
            }

            const selectedFilm = topFilms[selectedIndex];
            
            try {
                const movieDetails = await fetchData(`https://www.dark-yasiya-api.site/movie/sinhalasub/movie?url=${selectedFilm.link}`);
                
                if (!movieDetails?.result?.data) {
                    throw new Error("Failed to fetch movie details");
                }

                const { data: movie } = movieDetails.result;

                const detailsMsg = `🎥 *MOVIE DETAILS* 🎥

*🎬 Title:* ${movie.title}
*📅 Release:* ${movie.date || 'N/A'}
*⭐ IMDb:* ${movie.imdbRate || 'N/A'}/10
*⏱️ Runtime:* ${movie.runtime || 'N/A'}
*🌍 Country:* ${movie.country || 'N/A'}
*🎭 Genre:* ${movie.category.join(", ")}
*👨‍💼 Director:* ${movie.director}

*📝 Description:*
${movie.description}

*🎭 Cast:*
${movie.cast.map(c => `• ${c.cast_name} (${c.reall_name})`).join("\n")}`;

                await conn.sendMessage(from, {
                    image: { url: movie.image },
                    caption: detailsMsg
                }, { quoted: mek });

                if (movie.dl_links?.length) {
                    const downloadOptions = `
╭━─━─━─≪🎬≫─━─━─━╮
│ 📥 *DOWNLOAD OPTIONS*
│
${movie.dl_links.map((link, index) => `│ ${index + 1}. *${link.quality}*
│    📦 Size: ${link.size}
│    🔗 Quality: ${link.quality}`).join('\n│\n')}
│
│ 📌 *Reply with number to download*
╰━─━─━─≪🎬≫─━─━─━╯`;

                    const dlMsg = await conn.sendMessage(from, { text: downloadOptions }, { quoted: mek });

                    conn.ev.once("messages.upsert", async ({ messages }) => {
                        const dlResponse = messages[0];
                        if (!dlResponse?.message) return;

                        const dlReply = dlResponse.message.conversation || dlResponse.message.extendedTextMessage?.text;
                        const isDlReplyToBot = dlResponse.message.extendedTextMessage?.contextInfo?.stanzaId === dlMsg.key.id;

                        if (!isDlReplyToBot || !/^\d+$/.test(dlReply)) return;

                        const dlIndex = parseInt(dlReply) - 1;
                        if (dlIndex < 0 || dlIndex >= movie.dl_links.length) {
                            return reply("*❌ Invalid download option*");
                        }

                        const selectedLink = movie.dl_links[dlIndex];
                        const modifiedLink = selectedLink.link.replace("/u/", "/api/file/");

                        await conn.sendMessage(from, { react: { text: "⬇️", key: dlResponse.key }});

                        await conn.sendMessage(from, {
                            document: { url: modifiedLink },
                            mimetype: "video/mp4",
                            fileName: `${movie.title} [${selectedLink.quality}].mp4`,
                            caption: `🎬 *${movie.title}*\n📊 Quality: ${selectedLink.quality}\n📦 Size: ${selectedLink.size}`
                        }, { quoted: mek });

                        await conn.sendMessage(from, { react: { text: "✅", key: dlResponse.key }});
                    });
                }

                if (movie.images?.length) {
                    await conn.sendMessage(from, { text: "*📸 Uploading additional images...*" });
                    for (const imageUrl of movie.images) {
                        await conn.sendMessage(from, {
                            image: { url: imageUrl },
                            caption: `🎬 *${movie.title}* - Additional Image`
                        });
                    }
                }

            } catch (error) {
                reply("*❌ Failed to fetch movie details. Please try again later.*");
                console.error(error);
            }
        });

    } catch (error) {
        reply("*❌ An error occurred. Please try again later.*");
        console.error(error);
    }
});






cmd({
    pattern: "itnnews",
    desc: "Get the latest ITN news headlines or details of a given link.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        const rssFeedUrl = 'https://www.itnnews.lk/feed/';
        const response = await axios.get(rssFeedUrl);
        const xmlData = response.data;

        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(xmlData);

        const newsItems = result.rss.channel[0].item.map(item => ({
            title: item.title[0],
            link: item.link[0],
            description: item.description[0],
            pubDate: item.pubDate[0]
        }));

        // User එකට link එකක් දීලා search කරොත්
        if (q && q.startsWith("https://www.itnnews.lk/")) {
            const article = newsItems.find(news => news.link === q.trim());
            if (!article) return reply("❌ Sorry, this news article was not found in the latest updates!");

            let articleText = `*Didula MD V2 - 📰 ITN News Details:*\n\n`;
            articleText += `📌 *${article.title}*\n`;
            articleText += `📅 _${article.pubDate}_\n`;
            articleText += `📖 ${article.description}\n`;
            articleText += `🔗 ${article.link}\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ`;

            return reply(articleText);
        }

        // User එක link එකක් දීලා නැත්නම් Latest 5 news return කරනවා
        let newsText = `*📰 ITN Latest News:*\n\n`;
        newsItems.slice(0, 5).forEach((news, index) => {
            newsText += `📌 *${index + 1}.* *${news.title}*\n`;
            newsText += `📅 _${news.pubDate}_\n`;
            newsText += `🔗 ${news.link}\n\n\n> ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ`;
        });

        reply(newsText);
    } catch (error) {
        console.error("Error fetching ITN News:", error);
        reply("❌ Could not fetch ITN news. Please try again later.");
    }
});














cmd({
    pattern: "pornhub",
    alias: ["ph"],
    react: "🎥",
    desc: "download xVideo",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo Nicolette");

        const query = String(q);
        const searchResponse = await axios.get(`https://ipa-oya.vercel.app/api/ph?q=${encodeURIComponent(query)}`);

        const deta = searchResponse.data;
        const videoUrl = deta.url;

        let desc = `🎥 *Didula MD V2 - Now Downloading:* ${deta.title}

⏳ *Please wait, processing your request...*`;

        await conn.sendMessage(from, { 
            image: { url: deta.image }, 
            caption: desc 
        }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

        try {
            const downloadResponse = await axios.get(`https://ipa-oya.vercel.app/api/phdl?q=${encodeURIComponent(videoUrl)}`);
            const downloadUrls = downloadResponse.data;

            if (!downloadUrls || downloadUrls.length === 0) {
                return reply("❌ No download links found.");
            }

            let downloadMessage = "🎥 *Didula MD V2 Successfully Downloaded!*\n\nAvailable Resolutions:\n";
            downloadUrls.forEach((video) => {
                downloadMessage += `- ${video.resolution}p: ${video.download_url}\n`;
            });

            // Send the first download link as a video message
            const firstDownloadUrl = downloadUrls[0].download_url;
            await conn.sendMessage(from, { 
                video: { url: firstDownloadUrl }, 
                caption: downloadMessage 
            }, { quoted: mek });

        } catch (error) {
            reply("❌ Error fetching download links: " + error.message);
        }

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});


cmd({
    pattern: "xvideo",
    alias: ["xvideo2"],
    react: "🎥",
    desc: "download",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*⚠️ Please provide a video title or URL*\n\n*Example:* .xvideo My MILF Secretary Love");

        const query = String(q);
        const searchResponse = await axios.get(`https://api.giftedtech.my.id/api/search/xvideossearch?apikey=gifted&query=${encodeURIComponent(query)}`);

        if (!searchResponse.data.results || !searchResponse.data.results.length) {
            return reply("❌ No results found! Please try another search.");
        }

        const deta = searchResponse.data.results[0];
        const videoUrl = deta.url;

        let desc = `🎥 *Didula MD V2 - Now Downloading:* ${deta.title}

⏱️ *Duration:* ${deta.duration}
👁️ *Views:* ${deta.views || 'N/A'}
📅 *Quality:* ${deta.quality || 'N/A'}

⏳ *Please wait, processing your request...*`;

        await conn.sendMessage(from, { 
            image: { url: deta.thumb }, 
            caption: desc 
        }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

        try {
            const downloadResponse = await axios.get(`https://api.giftedtech.my.id/api/download/xvideosdl?apikey=gifted&url=${encodeURIComponent(videoUrl)}`);

            const downloadUrl = downloadResponse.data.result.download_url;

            await conn.sendMessage(from, { 
                video: { url: downloadUrl }, 
                mimetype: "video/mp4", 
                caption: "🎥 *Didula MD V2 Successfully Downloaded!*" 
            }, { quoted: mek });

        } catch (error) {
            reply("❌ Error downloading video: " + error.message);
        }

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});




cmd({
    pattern: "hirucheck",
    alias: ["hirunews","newshiru","hirulk"],
    react: "⭐",
    category: "search",
    desc: "Fetch the latest news from the SUHAS API in Hiru API.",
    use: "",
    filename: __filename,
},
    async (conn, mek, m, {
        from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber,
        botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName,
        participants, groupAdmins, isBotAdmins, isAdmins, reply
    }) => {
        try {
            const apiUrl = `https://suhas-bro-apii.vercel.app/hiru`;
//Dont Change This API Key
            const response = await axios.get(apiUrl);
            const data = response.data;

            if (!data || !data.newsURL || !data.title || !data.image || !data.text) {
                return reply(`*No News Available At This Moment* ❗`);
            }

            const { newsURL, title, image, text, Power } = data;

            let newsInfo = "𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐 𝐍𝐞𝐰𝐬 📰\n\n";
            newsInfo += `✨ *Title*: ${title}\n\n`;
            newsInfo += `📑 *Description*:\n${text}\n\n`;
            newsInfo += `⛓️‍💥 *Url*: www.hirunews.lk\n\n`;
            newsInfo += `> *ᴩʀᴏᴊᴇᴄᴛꜱ ᴏꜰ ᴅɪᴅᴜʟᴀ ʀᴀꜱʜᴍɪᴋᴀ*`;

            if (image) {
                await conn.sendMessage(m.chat, {
                    image: { url: image },
                    caption: newsInfo,
                }, { quoted: m });
            } else {
                await conn.sendMessage(m.chat, { text: newsInfo }, { quoted: m });
            }

        } catch (error) {
            console.error(error);
            reply(`*An Error Occurred While Fetching News At This Moment* ❗`);
        }
    }
);





cmd({
    pattern: "song",
    alias: ["song2"],
    react: "🎵",
    desc: "download",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
    if (!q) return reply("*⚠️ Please provide a song title or URL*\n\n*Example:* .song Alan Walker - Faded");

    const query = String(q);
    const search = await yts(query);

    if (!search.videos || !search.videos.length) {
        return reply("❌ No results found! Please try another search.");
    }

    const deta = search.videos[0];
    const url = deta.url;

    let desc = `🎵 *Now Downloading:* ${deta.title}

🎧 *Duration:* ${deta.timestamp}
👁️ *Views:* ${deta.views}
📅 *Uploaded:* ${deta.ago}
👤 *Author:* ${deta.author.name}

⏳ *Please wait, processing your request...*`;

    await conn.sendMessage(from, { 
        image: { url: deta.thumbnail }, 
        caption: desc 
    }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

    try {
        const response = await axios.get(`https://api.giftedtech.my.id/api/download/ytmp3?apikey=king_haki-k7gjd8@gifted_api&url=${encodeURIComponent(url)}`);

        const downloadUrl = response.data.result.download_url;

        await conn.sendMessage(from, { 
            audio: { url: downloadUrl }, 
            mimetype: "audio/mpeg", 
            caption: "🎵 *Successfully Downloaded!*" 
        }, { quoted: mek });

        await conn.sendMessage(from, { 
            document: { url: downloadUrl }, 
            mimetype: "audio/mpeg", 
            fileName: `${deta.title}.mp3`, 
            caption: "📎 *Document Version*\n\n✨ *Thanks for using our service!*" 
        }, { quoted: mek });

    } catch (error) {
        reply("❌ Error downloading audio: " + error.message);
    }

} catch (e) {
    console.log(e);
    reply(`❌ Error: ${e.message}`);
}
});

cmd({
    pattern: "video",
    alias: ["video2"],
    react: "🎥",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
    if (!q) return reply("*⚠️ Please provide a video title or URL*\n\n*Example:* .video Alan Walker - Faded");

    const query = String(q);
    const search = await yts(query);

    if (!search.videos || !search.videos.length) {
        return reply("❌ No results found! Please try another search.");
    }

    const deta = search.videos[0];
    const url = deta.url;

    let desc = `🎥 *Now Downloading:* ${deta.title}

⏱️ *Duration:* ${deta.timestamp}
👁️ *Views:* ${deta.views}
📅 *Uploaded:* ${deta.ago}
👤 *Author:* ${deta.author.name}

⏳ *Please wait, processing your request...*`;

    await conn.sendMessage(from, { 
        image: { url: deta.thumbnail }, 
        caption: desc 
    }, { quoted: mek }).catch(() => reply("❌ Error sending thumbnail"));

    try {
        const response = await axios.get(`https://api.giftedtech.my.id/api/download/ytmp4?apikey=king_haki-k7gjd8@gifted_api&url=${encodeURIComponent(url)}`);

        const downloadUrl = response.data.result.download_url;

        await conn.sendMessage(from, { 
            video: { url: downloadUrl }, 
            mimetype: "video/mp4", 
            caption: "🎥 *Successfully Downloaded!*" 
        }, { quoted: mek });

        await conn.sendMessage(from, { 
            document: { url: downloadUrl }, 
            mimetype: "video/mp4", 
            fileName: `${deta.title}.mp4`, 
            caption: "📎 *Document Version*\n\n✨ *Thanks for using our service!*" 
        }, { quoted: mek });

    } catch (error) {
        reply("❌ Error downloading video: " + error.message);
    }

} catch (e) {
    console.log(e);
    reply(`❌ Error: ${e.message}`);
}
});


cmd({
    pattern: "happy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "other",
    react: "😂",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '😂' });
        const emojiMessages = [
            "😃", "😄", "😁", "😊", "😎", "🥳",
            "😸", "😹", "🌞", "🌈", "😃", "😄",
            "😁", "😊", "😎", "🥳", "😸", "😹",
            "🌞", "🌈", "😃", "😄", "😁", "😊"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "heart",
    desc: "Displays a dynamic edit msg for fun.",
    category: "other",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🖤' });
        const emojiMessages = [
            "💖", "💗", "💕", "🩷", "💛", "💚",
            "🩵", "💙", "💜", "🖤", "🩶", "🤍",
            "🤎", "❤️‍🔥", "💞", "💓", "💘", "💝",
            "♥️", "💟", "❤️‍🩹", "❤️"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "angry",
    desc: "Displays a dynamic edit msg for fun.",
    category: "other",
    react: "🤡",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '👽' });
        const emojiMessages = [
            "😡", "😠", "🤬", "😤", "😾", "😡",
            "😠", "🤬", "😤", "😾"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "sad",
    desc: "Displays a dynamic edit msg for fun.",
    category: "other",
    react: "😶",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '😔' });
        const emojiMessages = [
            "🥺", "😟", "😕", "😖", "😫", "🙁",
            "😩", "😥", "😓", "😪", "😢", "😔",
            "😞", "😭", "💔", "😭", "😿"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "shy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🧐",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🧐' });
        const emojiMessages = [
            "😳", "😊", "😶", "🙈", "🙊",
            "😳", "😊", "😶", "🙈", "🙊"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "moon",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🌚",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🌝' });
        const emojiMessages = [
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌗", "🌘", "🌑", "🌒",
            "🌓", "🌔", "🌕", "🌖", "🌗", "🌘",
            "🌑", "🌒", "🌓", "🌔", "🌕", "🌖",
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌝🌚"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "confused",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🤔' });
        const emojiMessages = [
            "😕", "😟", "😵", "🤔", "😖", 
            "😲", "😦", "🤷", "🤷‍♂️", "🤷‍♀️"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "hot",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "💋",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '💋' });
        const emojiMessages = [
            "🥵", "❤️", "💋", "😫", "🤤", 
            "😋", "🥵", "🥶", "🙊", "😻", 
            "🙈", "💋", "🫂", "🫀", "👅", 
            "👄", "💋"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "didula",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🗿",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: 'Didula-AI🗿' });

        // Define the ASCII art messages
        const asciiMessages = [
            "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀     ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀(P)⠀⠀     ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀   ⠀     ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀        ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__ ⠀  ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀      ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀ ⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀       ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__| ⠀    ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀   ⠀  ⠀⢳⡀⠀⡏⠀⠀       ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀  ⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀       ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀lodu⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀   ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀  ⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀"
        ];

        // Send the initial loading message
        for (const asciiMessage of asciiMessages) {
            await new Promise(resolve => setTimeout(resolve, 500)); // Delay for 500ms second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: asciiMessage,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

// > JawadTechX 







cmd({
    pattern: "owner",
    desc: "To check ping",
    category: "main",
    react: "👤",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Didula Rashmika\n'
            + 'ORG:Didula MD V2;\n'
            + 'TEL;type=CELL;type=VOICE;waid=94741671668:+94 741 671 668\n'
            + 'TEL;type=CELL;type=VOICE;waid=94771820962:+94 771 820 962\n'
            + 'END:VCARD'

await conn.sendMessage(from, { 
    contacts: { 
        displayName: 'Didula Rashmika', 
        contacts: [{ vcard }] 
    }
},{quoted:mek})

await conn.sendMessage(from,{image:{url: 'https://files.catbox.moe/za6ytm.jpg'},caption: `*👤 Didula MD V2 Owner Details*\n\n*👨‍💻 Owner Name:* Didula Rashmika\n*📱 Owner Number:* wa.me/94741671668\n*📱 Owner Number:* wa.me/94771820962\n\n\n*💫 Thanks For Using Didula MD V2*`},{quoted:mek})

} catch (e) {
    reply(e)
    }
})





cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        let dec = `*DIDULA MD V2 NEW UPDATE✅*

*⭕ REPO URL*
\`\`\`https://github.com/itsme-didulabot/Didula-MD-V2\`\`\`

*⭕ GET SESSION ID*
\`\`\`https://prabath-md-pair-web-v2-slk.koyeb.app/pair\`\`\`

*⭕ HEROKU DEPLOY*
\`\`\`https://dashboard.heroku.com/new-app?template=https://github.com/itsme-didulabot/Didula-MD-V2\`\`\`

*Deploy Video ✅*

https://youtu.be/AtjXpHEwyKg?si=iLIxkkr4ujCu72cj


SPECIAL FEATURES 👀

> Chanel working
> Heart React
> Anti Bug Message
> Anti Bad/Bot/Link/Call
> AI Chat
> Auto Status Seen React and Reply
> Anti Once View
> Send Status to reply
> Anti Delete
> Commands 100+

*AUTO PLUGIN UPDATE*

📥FOLLOW FOR UPDATE
https://whatsapp.com/channel/0029VaqqF4GDTkJwKruLSK2f`;

        await conn.sendMessage(from, {
            image: {url: 'https://files.catbox.moe/za6ytm.jpg'},
            caption: dec
        }, {quoted: mek});

    } catch(e) {
        console.log(e);
        reply(`${e}`);
    }
});
