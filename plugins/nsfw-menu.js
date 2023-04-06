let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 6 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu _NSFW_.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🔞 _${usedPrefix}pack_
❏ 🔞 _${usedPrefix}pack2_
❏ 🔞 _${usedPrefix}pack3_
❏ 🔞 _${usedPrefix}videoxxx_
❏ 🔞 _${usedPrefix}videolesbixxx_
❏ 🔞 _${usedPrefix}tetas_
❏ 🔞 _${usedPrefix}booty_
❏ 🔞 _${usedPrefix}ecchi_
❏ 🔞 _${usedPrefix}furro_
❏ 🔞 _${usedPrefix}imagenlesbians_
❏ 🔞 _${usedPrefix}panties_
❏ 🔞 _${usedPrefix}pene_
❏ 🔞 _${usedPrefix}porno_
❏ 🔞 _${usedPrefix}randomxxx_
❏ 🔞 _${usedPrefix}pechos_
❏ 🔞 _${usedPrefix}yaoi_
❏ 🔞 _${usedPrefix}yaoi2_
❏ 🔞 _${usedPrefix}yuri_
❏ 🔞 _${usedPrefix}yuri2_
❏ 🔞 _${usedPrefix}trapito_
❏ 🔞 _${usedPrefix}hentai_
❏ 🔞 _${usedPrefix}nsfwloli_
❏ 🔞 _${usedPrefix}nsfworgy_
❏ 🔞 _${usedPrefix}nsfwfoot_
❏ 🔞 _${usedPrefix}nsfwass_
❏ 🔞 _${usedPrefix}nsfwbdsm_
❏ 🔞 _${usedPrefix}nsfwcum_
❏ 🔞 _${usedPrefix}nsfwero_
❏ 🔞 _${usedPrefix}nsfwfemdom_
❏ 🔞 _${usedPrefix}nsfwglass_
❏ 🔞 _${usedPrefix}hentaipdf *<texto>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu6']
handler.tags = ['info']
export default handler