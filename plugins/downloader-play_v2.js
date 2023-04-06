import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*◉ ⚠️ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗶𝗻𝘁𝗿𝗼𝗱𝘂𝘇𝗰𝗮 𝗲𝗹 𝗻𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗮𝘂𝗱𝗶𝗼/𝘃𝗶𝗱𝗲𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮 𝗯𝘂𝘀𝗰𝗮𝗿.*\n\n*◉ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:*\n*${usedPrefix + command} Black Catcher - Black Clover*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_\n☁️ִ໋𝐓𝐡𝐞𝐒𝐡𝐚𝐝𝐨𝐰-𝐌𝐃\n_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
