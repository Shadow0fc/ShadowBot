import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
 // let user = @${m.sender.split`@`[0]}
  let username = conn.getName(m.sender)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('⚠️ *_Máximo 10 segundos._*')
      let img = await q.download?.()
      if (!img) throw `⚠️️ *_Responde a una imagen o video con ${usedPrefix + command}_*`
      let out
      try {
        stiker = await sticker(img, false, global.packname2, global.author2)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.sendNyanCat(m.chat, global.wait, imagen4, adbot, null, linkgc, m) 
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname2, global.author2)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname2, global.author2)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: adbot, body: `h`, mediaType: 2, sourceUrl: igfg, thumbnail: imagen2}}}, { quoted: m })
    else throw '⚠️ *_La conversión ha fallado, intenta enviar primero imagen/video/gif y luego responde con el comando._*'
  }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'st']

handler.exp = 5

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}







global.packname2 = `📅❑𝐃𝐢𝐚:\n🕒❑ 𝗛𝗼𝗿𝗮:\n🗓️❑ 𝗙𝗲𝗰𝗵𝗮:\n🌸❑ By:`
global.author2 = `◉ 🏟 ${dia}\n◉ 🏝️ ${tiempo}\n◉ 🎍 ${fecha}\n◉ 📁 ${global.sdw}`

global.sdw = '+52 243 128 4029'
global.adbot = '◉ 🖼️ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗕𝘆 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁'


//᭥🕒᭢━━━━━━◜𝑻𝑰𝑬𝑴𝑷𝑶◞━━━━━━᭥🕒᭢
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//╰─────────────────────╯