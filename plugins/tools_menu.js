let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 8 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de herramientas.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🧰️ _${usedPrefix}chatgpt *<texto>*_
❏ 🧰 _${usedPrefix}dall-e *<texto>*_
❏ 🧰 _${usedPrefix}spamwa *<numero>_
❏ 🧰 _${usedPrefix}tamaño *<cantidad>*_
❏ 🧰 _${usedPrefix}clima *<país> <ciudad>*_
❏ 🧰 _${usedPrefix}encuesta *<texto1|texto2...>*_
❏ 🧰 _${usedPrefix}afk *<motivo>*_
❏ 🧰 _${usedPrefix}ocr *<responde a imagen>*_
❏ 🧰 _${usedPrefix}acortar *<url>*_
❏ 🧰 _${usedPrefix}calc *<operacion>*_
❏ 🧰 _${usedPrefix}del *<mensaje>*_
❏ 🧰 _${usedPrefix}whatmusic *<audio>*_
❏ 🧰 _${usedPrefix}readqr *<i(QR)>*_
❏ 🧰 _${usedPrefix}qrcode *<texto>*_
❏ 🧰 _${usedPrefix}readmore *<texto1| texto2>*_
❏ 🧰 _${usedPrefix}styletext *<texto>*_
❏ 🧰 _${usedPrefix}traducir *<texto>*_
❏ 🧰 _${usedPrefix}nowa *<numero>*_
❏ 🧰 _${usedPrefix}covid *<pais>*_
❏ 🧰 _${usedPrefix}horario_
*⊜━━━━━━━━━━━━━━━━⊜*`

conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu8']
handler.tags = ['info']
export default handler