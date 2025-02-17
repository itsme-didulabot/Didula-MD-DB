
const config = require('../config');
const fs = require('fs');
const { exec } = require('child_process');
const { cmd } = require('../command');
const path = require('path');

// Constants
const CONFIG_PATH = './config.js';
const BOT_NAME = "*◆─〈 ✦𝐃𝐢𝐝𝐮𝐥𝐚 𝐌𝐃 𝐕𝟐✦ 〉─◆*";
const OWNER_NAME = "Didula Rashmika";
const DEFAULT_FOOTER = "🔱 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐎𝐟 𝐃𝐢𝐝𝐮𝐥𝐚 𝐑𝐚𝐬𝐡𝐦𝐢𝐤𝐚 💀🙌";

const updateConfig = (key, value) => {
    try {
        let configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
        const newLine = `    ${key}: "${value}",`;
        
        if (configContent.includes(`${key}:`)) {
            const regex = new RegExp(`${key}:.*,`, 'g');
            configContent = configContent.replace(regex, newLine);
        } else {
            configContent = configContent.replace(/};\s*$/, `    ${newLine}\n};`);
        }
        
        fs.writeFileSync(CONFIG_PATH, configContent);
        delete require.cache[require.resolve('../config')];
        return true;
    } catch (error) {
        console.error('Error updating config:', error);
        return false;
    }
};

cmd({
    pattern: "settings",
    desc: "Update bot settings",
    category: "config",
    filename: __filename
}, async(conn, mek, m, { reply, q }) => {
    const config = require('../config');

    if (!q) {
        const menu = `${BOT_NAME}
👤 *Owner:* ${OWNER_NAME}

⚙️ *Bot Settings Menu*

1. Footer Text
   Current: ${config.FOOTER || DEFAULT_FOOTER}

2. Auto Read Status
   Current: ${config.AUTO_READ_STATUS === 'true' ? '✅ ON' : '❌ OFF'}

3. Bot Mode
   Current: ${config.MODE?.toUpperCase() || 'PUBLIC'}

4. Always Online
   Current: ${config.ALWAYS_ONLINE === 'true' ? '✅ ON' : '❌ OFF'}

5. Auto Typing
   Current: ${config.AUTO_TYPING === 'true' ? '✅ ON' : '❌ OFF'}

6. Auto Recording
   Current: ${config.AUTO_RECORDING === 'true' ? '✅ ON' : '❌ OFF'}

7. Auto Status Reply
   Current: ${config.AUTO_STATUS_REPLY === 'true' ? '✅ ON' : '❌ OFF'}

8. Status Reply Message
   Current: ${config.AUTO_STATUS__MSG || '*SEEN YOUR STATUS BY Didula MD V2*'}

9. Anti Call
   Current: ${config.ANTI_CALL === 'true' ? '✅ ON' : '❌ OFF'}

📝 Reply with number to change setting.
Example: .settings 1`;
        return reply(menu);
    }

    const option = parseInt(q.split(' ')[0]);
    const value = q.split(' ').slice(1).join(' ');

    const toggleMenu = (title, configKey) => `${BOT_NAME}
*${title}*

1. Turn On ✅
2. Turn Off ❌

Current: ${config[configKey] === 'true' ? '✅ ON' : '❌ OFF'}

Reply: .settings ${option} 1 (for On)
       .settings ${option} 2 (for Off)`;

    switch(option) {
        case 1:
            if (!value) {
                return reply(`${BOT_NAME}
*Footer Settings*

Current Footer: ${config.FOOTER || DEFAULT_FOOTER}

To change, type:
.settings 1 your_footer_text`);
            }
            if (updateConfig('FOOTER', value)) {
                reply(`✅ Footer updated successfully!\nNew Footer: ${value}\nRestart bot to apply changes.`);
            }
            break;

        case 2:
            if (!value) return reply(toggleMenu('Auto Read Status Settings', 'AUTO_READ_STATUS'));
            if (updateConfig('AUTO_READ_STATUS', value === '1' ? 'true' : 'false')) {
                reply(`✅ Auto read status turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        case 3:
            if (!value) {
                return reply(`${BOT_NAME}
*Bot Mode Settings*

1. Public Mode 🌐
2. Private Mode 🔒

Current: ${config.MODE?.toUpperCase() || 'PUBLIC'}

Reply: .settings 3 1 (for Public)
       .settings 3 2 (for Private)`);
            }
            if (updateConfig('MODE', value === '1' ? 'public' : 'private')) {
                reply(`✅ Bot mode set to ${value === '1' ? 'PUBLIC' : 'PRIVATE'}!\nRestart bot to apply changes.`);
            }
            break;

        case 4:
            if (!value) return reply(toggleMenu('Always Online Settings', 'ALWAYS_ONLINE'));
            if (updateConfig('ALWAYS_ONLINE', value === '1' ? 'true' : 'false')) {
                reply(`✅ Always online turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        case 5:
            if (!value) return reply(toggleMenu('Auto Typing Settings', 'AUTO_TYPING'));
            if (updateConfig('AUTO_TYPING', value === '1' ? 'true' : 'false')) {
                reply(`✅ Auto typing turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        case 6:
            if (!value) return reply(toggleMenu('Auto Recording Settings', 'AUTO_RECORDING'));
            if (updateConfig('AUTO_RECORDING', value === '1' ? 'true' : 'false')) {
                reply(`✅ Auto recording turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        case 7:
            if (!value) return reply(toggleMenu('Auto Status Reply Settings', 'AUTO_STATUS_REPLY'));
            if (updateConfig('AUTO_STATUS_REPLY', value === '1' ? 'true' : 'false')) {
                reply(`✅ Auto status reply turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        case 8:
            if (!value) {
                return reply(`${BOT_NAME}
*Status Reply Message Settings*

Current Message: ${config.AUTO_STATUS__MSG || '*SEEN YOUR STATUS BY Didula MD V2*'}

To change, type:
.settings 8 your_message`);
            }
            if (updateConfig('AUTO_STATUS__MSG', value)) {
                reply(`✅ Status reply message updated!\nNew Message: ${value}\nRestart bot to apply changes.`);
            }
            break;

        case 9:
            if (!value) return reply(toggleMenu('Anti Call Settings', 'ANTI_CALL'));
            if (updateConfig('ANTI_CALL', value === '1' ? 'true' : 'false')) {
                reply(`✅ Anti call turned ${value === '1' ? 'ON' : 'OFF'}!\nRestart bot to apply changes.`);
            }
            break;

        default:
            reply(`❌ Invalid option! Use .settings to see the menu.`);
    }
});

cmd({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/itsme-didulabot/Didula-MD-V2.git';
        const targetFolder = 'plugins';

        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder);
        }

        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(`Git command failed: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });

        await conn.sendMessage(from, { text: '*✅ Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(`*Error during update:* ${error.message}`);
    }
});

module.exports = {
    updateConfig
};
