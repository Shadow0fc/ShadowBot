import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw '*❏ 🎆 Y el codigo...(?*'
	await m.reply('*❏ 🏙️ Procesando lo que pidio......*\n\n${global.wait}')
	let res = await fetch(`https://restapi.frteam.xyz/nhentaipdf?id=${args[0]}&apikey=gopalasu`)
	let anu = await res.json()
	let { result } = anu
	conn.sendMessage(m.chat, { document: { url: result }, mimetype: 'application/pdf', fileName: args[0] + '.pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^(nhentaidl|dlnh)$/i
handler.register = true
handler.limit = true

export default handler