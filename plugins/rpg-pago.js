import fetch from 'node-fetch' //IGNOREN ESTE CÓDIGO JAJAJ
let handler = async (m, { isPrems, conn }) => {
//let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
//}
/*let users = m.sender.split`@`[0]
//let users = @${m.sender.split`@`[0]}
if ( users == 522431268546 || users == 17145121800 || users == 522431067355 || users == 522431284029) {*/

//let time = global.db.data.users[m.sender].lastpago + 1// + 86400000 // 36000000 10 Horas //86400000 24 Horas
//if (new Date - global.db.data.users[m.sender].lastpago < 86400000) throw `◉ 🌃 Ya recogiste tu pago, vuelve en: *${msToTime(time - new Date())}* para volver a reclamar...`

//let img = './Menu.png'
let img = imagen3
let sd = Math.floor(Math.random() * 10000000)
let sg = Math.floor(Math.random() * 10000)
let sh = Math.floor(Math.random() * 40000000)
let sf = Math.floor(Math.random() * 10000000)

  global.db.data.users[m.sender].limit += sd
  global.db.data.users[m.sender].money += sf
  global.db.data.users[m.sender].joincount += sg
  global.db.data.users[m.sender].exp += sh
  
let texto = `*━━━⊜ ⌊• PAGO •⌉⊜━━━*\n*🌃 ❏ Hola! @${m.sender.split`@`[0]}, aqui este su pago!!*\n*⊜━━━━━━━━━━━━━━━━⊜*\n\`\`\`◉ 🎆 ${sd} Diamantes 💎\n◉ 🌃 ${sf} Dinero 💵\n◉ 🌌 ${sg} Tokens 🎋\n◉ 🎑 ${sh} Exp 🔮\`\`\`
`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendButton(m.chat, texto, wm2, img, [['M E N U', '#menu'] ], fkontak, m)  
//global.db.data.users[m.sender].lastpago = new Date * 1
//user.lastpago = new Date * 1
//m.reply('\`\`\`❏ 🎋 Usted no tiene permiso de usar este comando...... Digale al owner que agregue su número para que pueda usarlo!\`\`\`')}
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['pago'] 
handler.level = 5
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}