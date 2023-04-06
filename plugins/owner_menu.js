let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 11 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu para el -CREADOR-.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🎑 > *<funcion>*
❏ 🎑 => *<funcion>*
❏ 🎑 $ *<funcion>*
❏ 🎑 _${usedPrefix}setprefix *<prefijo>*_
❏ 🎑 _${usedPrefix}desactivarwa *<numero>*_
❏ 🎑 _${usedPrefix}resetprefix_
❏ 🎑 _${usedPrefix}autoadmin_
❏ 🎑 _${usedPrefix}leavegc_
❏ 🎑 _${usedPrefix}cajafuerte_
❏ 🎑 _${usedPrefix}blocklist_
❏ 🎑 _${usedPrefix}block *<@tag / numero>*_
❏ 🎑 _${usedPrefix}unblock *<@tag / numero>*_
❏ 🎑 _${usedPrefix}enable *restrict*_
❏ 🎑 _${usedPrefix}disable *restrict*_
❏ 🎑 _${usedPrefix}enable *autoread*_
❏ 🎑 _${usedPrefix}disable *autoread*_
❏ 🎑 _${usedPrefix}enable *public*_
❏ 🎑 _${usedPrefix}disable *public*_
❏ 🎑 _${usedPrefix}enable *pconly*_
❏ 🎑 _${usedPrefix}disable *pconly*_
❏ 🎑 _${usedPrefix}enable *gconly*_
❏ 🎑 _${usedPrefix}disable *gconly*_
❏ 🎑 _${usedPrefix}enable *anticall*_
❏ 🎑 _${usedPrefix}disable *anticall*_
❏ 🎑 _${usedPrefix}enable *antiprivado*_
❏ 🎑 _${usedPrefix}disable *antiprivado*_
❏ 🎑 _${usedPrefix}enable *modejadibot*_
❏ 🎑 _${usedPrefix}disable *modejadibot*_
❏ 🎑 _${usedPrefix}msg *<texto>*_
❏ 🎑 _${usedPrefix}banchat_
❏ 🎑 _${usedPrefix}unbanchat_
❏ 🎑 _${usedPrefix}banuser *<@tag>*_
❏ 🎑 _${usedPrefix}unbanuser *<@tag>*_
❏ 🎑 _${usedPrefix}dardiamantes *<@tag>*_
❏ 🎑 _${usedPrefix}añadirxp *<@tag>*_
❏ 🎑 _${usedPrefix}banuser *<@tag>*_
❏ 🎑 _${usedPrefix}bc *<texto>*_
❏ 🎑 _${usedPrefix}bcchats *<texto>*_
❏ 🎑 _${usedPrefix}bcgc *<texto>*_
❏ 🎑 _${usedPrefix}bcgc2 *<audio>*_
❏ 🎑 _${usedPrefix}bcgc2 *<video>*_
❏ 🎑 _${usedPrefix}bcgc2 *<imagen>*_
❏ 🎑 _${usedPrefix}bcbot *<texto>*_
❏ 🎑 _${usedPrefix}cleartpm_
❏ 🎑 _${usedPrefix}restart_
❏ 🎑 _${usedPrefix}update_
❏ 🎑 _${usedPrefix}banlist_
❏ 🎑 _${usedPrefix}addprem *<@tag>*_
❏ 🎑 _${usedPrefix}delprem *<@tag>*_
❏ 🎑 _${usedPrefix}listprem_
❏ 🎑 _${usedPrefix}listcmd_
❏ 🎑 _${usedPrefix}setppbot *<responder img>*_
❏ 🎑 _${usedPrefix}addcmd *<texto> <reaponder*_
❏ 🎑 _${usedPrefix}delcmd *<responder>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu11']
handler.tags = ['info']
export default handler