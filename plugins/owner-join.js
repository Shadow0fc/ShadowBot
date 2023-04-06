let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '\`\`\`⚠• Ingrese un link, ejemplo:\`\`\`️\n#join https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ 𝐈𝐍𝐅𝐎 ❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:* ' + link, jid)
await m.reply('\`\`\|❗• El link de su grupo fue enviado a mi creador.\n\n⌛• Su grupo sera evaluado por mi creador y después decidira si el bot se une o no.\`\`\`\n\n\`\`\`🌃• Después de que su grupo sea evaluado el bot se unira por el tiempo elegido por mi creador, puede ser de 1 a 5 dias. Después del tiempo transcurrido el bot se saldra automáticamente.\`\`\`\n\n\`\`\`🏷️• Si el bot no se une después de 1/5 horas puede ser porque se restableció el enlace o el bot fue eliminado recientemente.\`\`\`')
}
} catch {
throw '*⚠️• Lo sentimos el comando tiene un error..... (so solo envio #join le dara este error, envie el comando junto al link por favor, y si este mensaje vuelve a aparecer entonces si tiene un error, gracias.)'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo|unete$/i
handler.private = true 
export default handler
