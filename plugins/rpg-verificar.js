import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `*◉ 🎋 Usted ya esta registrado!*\n\n*◉ 🏷️ Si quiere eliminar su registro use lo siguiente:*\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*◉ ❗ Formato incorrecto!*\n\n*◉ 🎋 Uso correcto del comando: ${usedPrefix + command} nombre.edad*\n*◉ 🌌 Ejemplo: ${usedPrefix + command} Shadow.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*◉ 🎋 Ingresa el nombre*'
  if (!age) throw '*◉ 🌅 La edad no puede estar vacia!*'
  if (name.length >= 30) throw '*◉ 🌃 El nombre es muy largo, lo máximo de letras son -30-*' 
  age = parseInt(age)
  if (age > 100) throw '*◉ 💀 Kheee, como sigues vivo con esa edad? 👴🏻*'
  if (age < 5) throw '*◉ 👻 Kheee, un bebé que sabe usar WhatsApp? 😲*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `─━━🎍◉ *REGISTRO;* ━━─
* (っ.❛ ᴗ ❛.)っ*
━━━━━━━━━━━━━━━━
◉ 🎋 *Nombre:* ${name}

◉ 🎆 *Edad:* ${age} años

◉ 🌺 *Numero de serie:*
${sn}
━━━━━━━━━━━━━━━━`
let author = global.author
conn.sendButton(m.chat, caption, `❏ 🏷️ 𝗧𝘂 𝗻𝘂𝗺𝗲𝗿𝗼 𝗱𝗲 𝘀𝗲𝗿𝗶𝗲 𝘁𝗲 𝘀𝗲𝗿𝘃𝗶𝗿𝗮 𝗽𝗮𝗿𝗮 𝗯𝗼𝗿𝗿𝗮𝗿 𝘁𝘂 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼 𝗮𝘀𝗶 𝗾𝘂𝗲 𝗴𝘂𝗮𝗿𝗱𝗮𝗹𝗼!!\n${author}\n\n◉ 🏟️ 𝗕𝗼𝗻𝗼 𝗽𝗼𝗿 𝘁𝘂 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼;\n\n◉ 🏝 𝟭𝟬𝗸 𝗫𝗽\n◉ 🎍 𝟭𝟬𝗸 𝗖𝗼𝗶𝗻𝘀️`, [['𝗠 𝗘 𝗡 𝗨', '#menu']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler