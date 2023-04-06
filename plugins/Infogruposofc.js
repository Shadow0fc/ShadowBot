let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁-𝗠𝗗.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler