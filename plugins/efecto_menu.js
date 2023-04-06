let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 7 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de efectos y/o chat anonimo.*
*⊜━━━━━━━━━━━━━━━━⊜*
*🔊◉ EFECTOS EN AUDIOS;*
*⊜━━━━━━━━━━━━━━━━⊜*
*_-Responde a un audio o nota de voz-_*
❏ 🎛️ _${usedPrefix}bass_
❏ 🎛️ _${usedPrefix}blown_
❏ 🎛️ _${usedPrefix}deep_
❏ 🎛️ _${usedPrefix}earrape_
❏ 🎛️ _${usedPrefix}fast_
❏ 🎛️ _${usedPrefix}fat_
❏ 🎛️ _${usedPrefix}nightcore_
❏ 🎛️ _${usedPrefix}reverse_
❏ 🎛️ _${usedPrefix}robot_
❏ 🎛️ _${usedPrefix}slow_
❏ 🎛️ _${usedPrefix}smooth_
❏ 🎛️ _${usedPrefix}tupai_
*⊜━━━━━━━━━━━━━━━━⊜*
*👤◉ CHAT ANÓNIMO;*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🆔 _${usedPrefix}start_
❏ 🆔 _${usedPrefix}next_
❏ 🆔 _${usedPrefix}leave_
*⊜━━━━━━━━━━━━━━━━⊜*`

conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu7']
handler.tags = ['info']
export default handler