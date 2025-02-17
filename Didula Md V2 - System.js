const { cmd, commands } = require('../lib/command');
const config = require('../settings');
const si = require('systeminformation');
const pdfUrl = "https://i.ibb.co/tC37Q7B/20241220-122443.jpg";
const fs = require('fs');
const path = require('path')



cmd({
    pattern: "bugdr",
    desc: "Check if the bot is alive.",
    category: "main",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Send a message indicating the bot is alive
        await conn.sendMessage(from, { text: '*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*' });

        // Simulate some processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulating a delay
        const endTime = Date.now();
        const ping = endTime - startTime; // Capture the ping time

        // Send the alive response with additional information
        await conn.sendMessage(from, {
            document: { url: pdfUrl }, // Ensure pdfUrl is defined
            fileName: '〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉', // Filename for the document
            mimetype: "application/pdf",
            fileLength: 99999999999999, // Adjust file length as necessary
            image: { url: 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg' },
            pageCount: 2024,
            caption: "`UI Youko`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + "ી".repeat(505),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉',
                    newsletterJid: "120363343196447945@newsletter",
                },
                externalAdReply: {
                    title: '©〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉',
                    body: ' *〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉*',
                    thumbnailUrl: 'https://i.ibb.co/tC37Q7B/20241220-122443.jpg',
                    sourceUrl: 'https://wa.me/message/DIDULLTK7ZOGH1',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

    } catch (e) {
        console.error(e); // Log the error for debugging
        reply(`An error occurred: ${e.message || e}`); // Provide a user-friendly error message
    }
});
