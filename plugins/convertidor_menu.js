let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 4•⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu convertidor y/o de logos.*
*⊜━━━━━━━━━━━━━━━━⊜*
*🌺◉ CONVERTIDORES;*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🌅 _${usedPrefix}toanime *<imagen>*_
❏ 🌅 _${usedPrefix}togifaud *<video>*_
❏ 🌅 _${usedPrefix}toimg *<sticker>*_
❏ 🌅 _${usedPrefix}tomp3 *<video>*_
❏ 🌅 _${usedPrefix}tomp3 *<nota de voz>*_
❏ 🌅 _${usedPrefix}toptt *<video / audio>*_
❏ 🌅 _${usedPrefix}tovideo *<sticker>*_
❏ 🌅 _${usedPrefix}tourl *<video / imagen / audio>*_
❏ 🌅 _${usedPrefix}tts es *<texto>*_
*⊜━━━━━━━━━━━━━━━━⊜*
*🎋◉ EFECTOS Y LOGOS;*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🌌 _${usedPrefix}phmaker *<opcion>*_
❏ 🌌 _${usedPrefix}logos *<efecto> <texto>*_
❏ 🌌 _${usedPrefix}logochristmas *<texto>*_
❏ 🌌 _${usedPrefix}logocorazon *<texto>*_
❏ 🌌 _${usedPrefix}ytcomment *<texto>*_
❏ 🌌 _${usedPrefix}hornycard *<@tag>*_
❏ 🌌 _${usedPrefix}simpcard *<@tag>*_
❏ 🌌 _${usedPrefix}lolice *<@tag>*_
❏ 🌌 _${usedPrefix}itssostupid_
❏ 🌌 _${usedPrefix}pixelar_
❏ 🌌 _${usedPrefix}blur_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu4']
handler.tags = ['info']
export default handler