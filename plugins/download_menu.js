let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 2 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de descargas.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🗂️ _${usedPrefix}instagram *<link*_
❏ 🗂️ _${usedPrefix}instagram2 *<link*_
❏ 🗂️ _${usedPrefix}instagram3 *<link*_
❏ 🗂️ _${usedPrefix}mediafire *<link*_
❏ 🗂️ _${usedPrefix}instagram *<link*_
❏ 🗂️ _${usedPrefix}gitclone *<link*_
❏ 🗂️ _${usedPrefix}gdrive *<link*_
❏ 🗂️ _${usedPrefix}tiktok *<link*_
❏ 🗂️ _${usedPrefix}xnxxdl *<link*_
❏ 🗂️ _${usedPrefix}xvideosdl *<link*_
❏ 🗂️ _${usedPrefix}twitter *<link*_
❏ 🗂️ _${usedPrefix}fb *<link*_
❏ 🗂️ _${usedPrefix}fb2 *<link*_
❏ 🗂️ _${usedPrefix}fb3 *<link*_
❏ 🗂️ _${usedPrefix}fb4 *<link*_
❏ 🗂️ _${usedPrefix}fb5 *<link*_
❏ 🗂️ _${usedPrefix}ytmp3 *<link*_
❏ 🗂️ _${usedPrefix}ytmp4 *<link*_
❏ 🗂️ _${usedPrefix}ytmp3doc *<link*_
❏ 🗂️ _${usedPrefix}ytmp4doc *<link*_
❏ 🗂️ _${usedPrefix}videodoc *<link*_
❏ 🗂️ _${usedPrefix}dapk2 *<link*_
❏ 🗂️ _${usedPrefix}stickerpack *<link*_
❏ 🗂️ _${usedPrefix}play *<texto>*_
❏ 🗂️ _${usedPrefix}play.1 *<texto>*_
❏ 🗂️ _${usedPrefix}play.2 *<texto>*_
❏ 🗂️ _${usedPrefix}playdoc *<texto>*_
❏ 🗂️ _${usedPrefix}playlist *<texto>*_
❏ 🗂️ _${usedPrefix}playlist2 *<texto>*_
❏ 🗂️ _${usedPrefix}spotify *<texto>*_
❏ 🗂️ _${usedPrefix}ringtone *<texto>*_
❏ 🗂️ _${usedPrefix}soundcloud *<texto>*_
❏ 🗂️ _${usedPrefix}imagen *<texto>*_
❏ 🗂️ _${usedPrefix}pinterest *<texto>*_
❏ 🗂️ _${usedPrefix}wallpaper *<texto>*_
❏ 🗂️ _${usedPrefix}wallpaper2 *<texto>*_
❏ 🗂️ _${usedPrefix}pptiktok *<usuario>*_
❏ 🗂️ _${usedPrefix}igstalk *<usuario>*_
❏ 🗂️ _${usedPrefix}igstory *<usuario>*_
❏ 🗂️ _${usedPrefix}tiktokstalk *<username>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu2']
handler.tags = ['info']
export default handler