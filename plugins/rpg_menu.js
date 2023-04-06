let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 9 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu RPG & ECONOMÍA.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🔮 _${usedPrefix}adventure_
❏ 🔮 _${usedPrefix}cazar_
❏ 🔮 _${usedPrefix}cofre_
❏ 🔮 _${usedPrefix}balance_
❏ 🔮 _${usedPrefix}claim_
❏ 🔮 _${usedPrefix}heal_
❏ 🔮 _${usedPrefix}lb_
❏ 🔮 _${usedPrefix}levelup_
❏ 🔮 _${usedPrefix}myns_
❏ 🔮 _${usedPrefix}perfil_
❏ 🔮 _${usedPrefix}work_
❏ 🔮 _${usedPrefix}minar_
❏ 🔮 _${usedPrefix}minar2_
❏ 🔮 _${usedPrefix}buy_
❏ 🔮 _${usedPrefix}buyall_
❏ 🔮 _${usedPrefix}verificar_
❏ 🔮 _${usedPrefix}robar *<@tag>*_
❏ 🔮 _${usedPrefix}transfer *<@tag>*_
❏ 🔮 _${usedPrefix}unreg *<numero de serie>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu9']
handler.tags = ['info']
export default handler