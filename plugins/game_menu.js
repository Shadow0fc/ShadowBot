let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 1 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de juegos.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🎍 _${usedPrefix}mates *<noob>*_
❏ 🎍 _${usedPrefix}ppt *<piedra/papel/tijera>*_
❏ 🎍 _${usedPrefix}prostituto *<@tag>*_
❏ 🎍 _${usedPrefix}prostituta *<@tag>*_
❏ 🎍 _${usedPrefix}gay2 *<@tag>*_
❏ 🎍 _${usedPrefix}lesbiana *<@tag>*_
❏ 🎍 _${usedPrefix}pajero *<@tag>*_
❏ 🎍 _${usedPrefix}pajera *<@tag>*_
❏ 🎍 _${usedPrefix}puto *<@tag>*_
❏ 🎍 _${usedPrefix}puta *<@tag>*_
❏ 🎍 _${usedPrefix}manco *<@tag>*_
❏ 🎍 _${usedPrefix}manca *<@tag>*_
❏ 🎍 _${usedPrefix}rata *<@tag>*_
❏ 🎍 _${usedPrefix}love *<@tag>*_
❏ 🎍 _${usedPrefix}doxear *<@tag>*_
❏ 🎍 _${usedPrefix}pregunta *<texto>*_
❏ 🎍 _${usedPrefix}suitpvp *<@tag>*_
❏ 🎍 _${usedPrefix}slot *<cantidad>*_
❏ 🎍 _${usedPrefix}ttt *<sala>*_
❏ 🎍 _${usedPrefix}delttt_
❏ 🎍 _${usedPrefix}acertijo_
❏ 🎍 _${usedPrefix}simi *<texto>*_
❏ 🎍 _${usedPrefix}top *<texto>*_
❏ 🎍 _${usedPrefix}topgays_
❏ 🎍 _${usedPrefix}topotakus_
❏ 🎍 _${usedPrefix}formarpareja_
❏ 🎍 _${usedPrefix}verdad_
❏ 🎍 _${usedPrefix}reto_
❏ 🎍 _${usedPrefix}cancion_
❏ 🎍 _${usedPrefix}pista_
❏ 🎍 _${usedPrefix}akinator_
*⊜━━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu1']
handler.tags = ['info']
export default handler