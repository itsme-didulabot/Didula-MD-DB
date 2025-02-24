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



// 😂🌝ආආ හම්බුන්දා 😁😁😁😁




cmd({
    pattern: "wabug",
    desc: "Send a message 20 times to a target number.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, isOwner }) => {
    if (!isOwner) return reply("❌ You are not the owner!");

    const targetNumber = args[0];
    if (!targetNumber) return reply("❗ Please provide a target number.");

    const message = `̿Didula MD` + "🍌😹".repeat(5000);
    const fullMessage = message + "\n"; // Adding new line for better readability

    try {
        for (let i = 0; i < 2; i++) {
            await conn.sendMessage(targetNumber + "@s.whatsapp.net", { text: fullMessage });
        }
        reply("✅ Message sent 20 times to " + targetNumber);
    } catch (error) {
        console.error("Failed to send message:", error);
        reply("❗ An error occurred while sending the message.");
    }
});




cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["wtf", "mia","පොන්නයා","හැමිනෙනවා","කැරියා", "හුත්තා", "හුත්තා","පකයා","fuck","sex","huththa","pakaya","ponnaya","hutto","kariya","pakaya","hukapan","hukanna","hutto","xvdl","hutto","Hukapamm","lol"]
        if (!isGroup || isAdmins || !isBotAdmins) return; 
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
          await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          await conn.sendMessage(from, { text: "⚠️BAD WORDS NOT ALLOWED⚠️ " }, { quoted: mek });
          await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
})
const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            
    /https?:\/\/ngl\/\S+/gi,                             
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,            
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,      
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi,
               
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });

             // Remove the user from the group
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
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
    alias: ["film", "cinema"], 
    react: "🎬", 
    desc: "Search and Download Movies with Sinhala Subtitles", 
    category: "main", 
    use: '.movie < Movie Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("⚠️ Please provide a movie name!");

        // Search for the movie
        let searchUrl = `https://omindu-api.up.railway.app/api/sinhalasub/search?query=${encodeURIComponent(q)}`;
        let searchResponse = await fetch(searchUrl);
        let searchData = await searchResponse.json();

        if (!searchData.results.movies || searchData.results.movies.length < 1) 
            return reply("❌ No movies found!");

        let movie = searchData.results.movies[0];

        // Get download links
        let downloadUrl = `https://omindu-api.up.railway.app/api/sinhalasub/download?url=${encodeURIComponent(movie.link)}`;
        let downloadResponse = await fetch(downloadUrl);
        let downloadData = await downloadResponse.json();

        let movieInfo = downloadData.info;
        let dlLinks = downloadData.dl_links;

        let movieMsg = `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎬 *MOVIE DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇📌 *Title:* ${movieInfo.title}
┇📅 *Release Date:* ${movieInfo.release_date}
┇⏱️ *Runtime:* ${movieInfo.runtime}
┇⭐ *TMDB Rating:* ${movieInfo.tmdb_Rating}
┇🎭 *Genres:* ${movieInfo.genres.join(", ")}
┇🎬 *Director:* ${movieInfo.director.name}
╰━━❑━⪼

📥 *Download Links:*

*Server 1:*
${dlLinks.server_01.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Telegram:*
${dlLinks.telagram.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Server 2:*
${dlLinks.server_02.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Server 3:*
${dlLinks.server_03.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Type . dl <download link> for download movie 💗😚*

*💫 Quality Movie Downloader By Didula MD V2*`;

        await conn.sendMessage(from, { 
            image: { url: movieInfo.poster }, 
            caption: movieMsg 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
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




const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "video", 
    alias: ["video2", "play"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("⚠️ Please provide a YouTube URL or song name!");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found!");

        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("⚠️ Failed to fetch the video. Please try again later.");
        }

        let ytmsg = `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 📽️ *VIDEO DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇📌 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 Quality Video Downloader By Didula MD V2*`;

        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `🎥 *${yts.title}*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
    }
});  

cmd({ 
     pattern: "song", 
     alias: ["ytdl3", "yta"], 
     react: "🎵", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("⚠️ Please provide a YouTube URL or song name!");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found!");

        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("⚠️ Failed to fetch the audio. Please try again later.");
        }

        let ytmsg = `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎵 *MUSIC DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇🎧 *Title:* ${yts.title}
┇⏱️ *Duration:* ${yts.timestamp}
┇👀 *Views:* ${yts.views}
┇👤 *Author:* ${yts.author.name}
┇🔗 *Link:* ${yts.url}
╰━━❑━⪼

*💫 High Quality Audio By Didula MD V2*`;

        await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
        await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        await conn.sendMessage(from, { 
            document: { url: data.result.downloadUrl }, 
            mimetype: "audio/mpeg", 
            fileName: `${data.result.title}.mp3`, 
            caption: `🎵 *${yts.title}*\n\n*🌟 Created By:* Didula Rashmika\n*🤖 Bot:* Didula MD V2`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
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
