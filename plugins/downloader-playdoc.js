import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*◉ ⚠️ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗶𝗻𝘁𝗿𝗼𝗱𝘂𝘇𝗰𝗮 𝗲𝗹 𝗻𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗮𝘂𝗱𝗶𝗼/𝘃𝗶𝗱𝗲𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮 𝗯𝘂𝘀𝗰𝗮𝗿.*\n\n*◉ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:*\n*${usedPrefix + command} Black Catcher - Black Clover*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎𝐃𝐎𝐂 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎𝐃𝐎𝐂 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋' }, type: 1 }, ] 
let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
❏ 📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${yt_play[0].title}
❏ 📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗱𝗼:* ${yt_play[0].ago}
❏ ⌚ *𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *𝗔𝘂𝘁𝗼𝗿:* ${yt_play[0].author.name}
❏ ⏯️ *𝗖𝗮𝗻𝗮𝗹:* ${yt_play[0].author.url}
❏ 🆔 *𝗜𝗗:* ${yt_play[0].videoId}
❏ 🪬 *𝗧𝗶𝗽𝗼:* ${yt_play[0].type}
❏ 🔗 *𝗟𝗶𝗻𝗸:* ${yt_play[0].url}`.trim()
let buttonMessage = { "document": { url: "https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${published}\n❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler
