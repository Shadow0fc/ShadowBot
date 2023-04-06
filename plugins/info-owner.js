let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*◉ 🎋 Número de mi creador: wa.me//522431268546*
`.trim()   
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH` },
'mimetype': `application/${document}`,
'fileName': `${wm}`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen2,
'sourceUrl': 'https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'M E N U'}, type: 1}, 
{buttonId: `${usedPrefix}gruposofc`, buttonText: {displayText: 'G R U P O S'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler