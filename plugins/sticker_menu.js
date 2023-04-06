let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 10 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de stickers y creación.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🍡 _${usedPrefix}sticker *<imagen>*_
❏ 🍡 _${usedPrefix}sticker *<enlace>*_
❏ 🍡 _${usedPrefix}sticker2 *<imagen>*_
❏ 🍡 _${usedPrefix}sticker2 *<enlace>*_
❏ 🍡 _${usedPrefix}s *<imagen>*_
❏ 🍡 _${usedPrefix}s *<enlace>*_
❏ 🍡 _${usedPrefix}s2 *<imagen>*_
❏ 🍡 _${usedPrefix}s2 *<enlace>*_
❏ 🍡 _${usedPrefix}emojimix *<1&2>*_
❏ 🍡 _${usedPrefix}scircle *<imagen>*_
❏ 🍡 _${usedPrefix}sremovebg *<imagen>*_
❏ 🍡 _${usedPrefix}semoji *<tipo> <emoji>*_
❏ 🍡 _${usedPrefix}attp *<texto>*_
❏ 🍡 _${usedPrefix}attp2 *<texto>*_
❏ 🍡 _${usedPrefix}attp3 *<texto>*_
❏ 🍡 _${usedPrefix}ttp *<texto>*_
❏ 🍡 _${usedPrefix}ttp2 *<texto>*_
❏ 🍡 _${usedPrefix}ttp3 *<texto>*_
❏ 🍡 _${usedPrefix}ttp4 *<texto>*_
❏ 🍡 _${usedPrefix}ttp5 *<texto>*_
❏ 🍡 _${usedPrefix}pat *<@tag>*_
❏ 🍡 _${usedPrefix}slap *<@tag>*_
❏ 🍡 _${usedPrefix}kiss *<@tag>*_
❏ 🍡 _${usedPrefix}dado_
❏ 🍡 _${usedPrefix}wm *<packname> <author>*_
❏ 🍡 _${usedPrefix}stickermarker *<efecto>*_
❏ 🍡 _${usedPrefix}stickerfilter *<efecto>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu10']
handler.tags = ['info']
export default handler