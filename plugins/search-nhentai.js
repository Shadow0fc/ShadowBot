import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
  if (!text) throw `❏ 👑 Que quiere buscar..(?\n*Ejemplo:* ${usedPrefix + command} miku`
  let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${global.lolkey}&query=${text}`)
  let res2 = await res.json()
  let cap = `*❏ ✨ Resultado del texto; ${text}*\n`
  for (let json of res2.result) {
   cap += ` • *ID:* ${json.id} 
• *Ingles:* ${json.title_english}
• *Japomes:* ${json.title_japanese}
• *no c traducir esto:* ${json.title_native}
• *paginas:* ${json.page}
`
cap += '\n' + '••••••••••••••••••••••••' + '\n'
  	}
  conn.sendButton(m.chat, cap, wm2, [['MENU', '.menu']], m)
}
handler.command = /^(nhsh|nhs)$/i
handler.limit = true
handler.tags = ['nsfw']
handler.register = true

export default handler