import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

/*let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  let name = conn.getName(who) */

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
global.vs = '1.0.0'
wm = global.wm
vs = global.vs
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
//const sections = [  
//{
const sections = [
   {
/*title: `❏ 🎋 𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗠𝗲𝗻𝘂𝘀`,
rows: [*/
    title: `━⊜ ⌊•❏ 🎋 𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗠𝗲𝗻𝘂𝘀•⌉⊜━`,
	rows: [
	{title: "🔮 |  𝗝𝘂𝗲𝗴𝗼𝘀", 
	description: "⊜ ❝Juegos random para pasar sl rato❞",
	rowId: `${usedPrefix}menu1`}]}, {
	title: `━━━⊜ ⌊• 2 •⌉⊜━━━`,
	rows: [
	{title: "🗂️ | 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝘀", 
	description: "⊜ ❝Muestra la lista dd comandos para descargas❞",
	rowId: `${usedPrefix}menu2`}]}, {
		title: `━━━⊜ ⌊• 3 •⌉⊜━━━`,
	rows: [
	{title: "🗃️ | 𝗚𝗿𝘂𝗽𝗼𝘀", 
	description: "⊜ ❝Comandos para gestionar tu grupo❞",
	rowId: `${usedPrefix}menu3`}]}, {
		title: `━━━⊜ ⌊• 4 •⌉⊜━━━`,
	rows: [
	{title: "🌸 | 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗱𝗼𝗿𝗲𝘀 𝘆 𝗹𝗼𝗴𝗼𝘀", 
	description: "⊜ ❝Comandos para crear logos y convertir varias cosas❞",
	rowId: `${usedPrefix}menu4`}]}, {
		title: `━━━⊜ ⌊• 5 •⌉⊜━━━`,
	rows: [
	{title: "🥃 | 𝗥𝗮𝗻𝗱𝗼𝗺 𝘆 𝗳𝗿𝗮𝘀𝗲𝘀", 
	description: "⊜ ❝Comandos random de frsases, ect....❞",
	rowId: `${usedPrefix}menu5`}]}, {
		title: `━━━⊜ ⌊• 6 •⌉⊜━━━`,
	rows: [
	{title: "🚫 | 𝗡𝗦𝗙𝗪", 
	description: "⊜ ❝Comandos +18, use bajo su responsabilidad❞",
	rowId: `${usedPrefix}menu6`}]}, {
		title: `━━━⊜ ⌊• 7 •⌉⊜━━━`,
	rows: [
	{title: "🎚️ | 𝗘𝗳𝗲𝗰𝘁𝗼𝘀 𝗲𝗻 𝗮𝘂𝗱𝗶𝗼𝘀", 
	description: "⊜ ❝Comandos de efectos para audios y chat anonimo❞",
	rowId: `${usedPrefix}menu7`}]}, {
		title: `━━━⊜ ⌊• 8 •⌉⊜━━━`,
	rows: [
	{title: "⚙️ | 𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀", 
	description: "⊜ ❝Comandos basicos que te pueden servir❞",
	rowId: `${usedPrefix}menu8`}]}, {
		title: `━━━⊜ ⌊• 9 •⌉⊜━━━`,
	rows: [
	{title: "🔮 | 𝗥𝗣𝗚 𝘆 𝗲𝗰𝗼𝗻𝗼𝗺𝗶𝗮", 
	description: "⊜ ❝Comandos RPG para subir de nivel y/o para pasar el rato xD❞",
	rowId: `${usedPrefix}menu9`}]}, {
		title: `━━━⊜ ⌊• 10 •⌉⊜━━━`,
	rows: [
	{title: "🖼️ | 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀", 
	description: "⊜ ❝Comandos de creacion para stickers❞",
	rowId: `${usedPrefix}menu10`}]}, {
		title: `━━━⊜ ⌊• 11 •⌉⊜━━━`,
	rows: [
	{title: "⚠️ | 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗽𝗮𝗿𝗮 𝗲𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿", 
	description: "⊜ ❝Lista de comandos exclusiva para mods y el creador❞",
	rowId: `${usedPrefix}menu11`}]}, {
		title: `━━━⊜ ⌊• 12 •⌉⊜━━━`,
	rows: [
	{title: "🧫 | 𝗩𝗶𝗿𝘂𝘀 𝗺𝗮𝘁𝗮 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽", 
	description: "⊜ ❝Comandos de virus para lagguear el WhatsApp....(solo el creador, creo xd)❞",
	rowId: `${usedPrefix}menu12`}]}, {
		title: `━⊜ ⌊• 𝗢𝗣𝗖𝗜𝗢𝗡𝗘𝗦 𝗘𝗫𝗧𝗥𝗔 •⌉⊜━`,
	rows: [
	{title: "🏟️ | 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗲𝗹 𝗯𝗼𝘁", description: "◉ ❝Envia el contacto de mi creador❞", rowId: `${usedPrefix}owner\n`},
    {title: "🎍| 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿𝘀𝗲 𝗲𝗻 𝗦𝘂𝗯𝗯𝗼𝘁", description: "◉ ❝Vuelvete un subbot❞", rowId: `${usedPrefix}jadibot\n`},
    {title: "⚠️| 𝗔𝗰𝘁𝗶𝘃𝗮𝗿/𝗗𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗿 -𝗥𝗘𝗦𝗧𝗥𝗜𝗖𝗧-", description: "◉ ❝Activar la opcion -Restrict- para poder sacar gente(owner)❞", rowId: `${usedPrefix + command} restrict\n`},
    {title: "🎁️| 𝗥𝗲𝗰𝗹𝗮𝗺𝗮 𝘁𝘂 𝗿𝗲𝗴𝗮𝗹𝗼 𝗱𝗶𝗮𝗿𝗶𝗼", description: "◉ ❝Reclama tu exp diaria❞", rowId: `${usedPrefix}claim\n`},
    {title: "🏝️| 𝗧𝗼𝗽 𝘂𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗲𝗻 𝗲𝗹 𝗯𝗼𝘁", description: "◉ ❝Muestra el top usuarios en exp, limit y nivel❞", rowId: `${usedPrefix}lb\n`},
    {title: "📁| 𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗦𝘂𝗯𝗯𝗼𝘁𝘀 𝗮𝗰𝘁𝗶𝘃𝗼𝘀", description: "◉ ❝Subbots activos❞", rowId: `${usedPrefix}bots`},
	/*{title: " | ", 
	description: "⊜ ❝❞",
	rowId: `${usedPrefix}`}]}, {
		title: `━━━⊜ ⌊•  •⌉⊜━━━`,
	rows: [
	{title: " | ", 
	description: "⊜ ❝❞",
	rowId: `${usedPrefix}`}]}, {
		title: `━━━⊜ ⌊•  •⌉⊜━━━`,
	rows: [
	{title: " | ", 
	description: "⊜ ❝❞",
	rowId: `${usedPrefix}`}]}, {
		title: `━━━⊜ ⌊•  •⌉⊜━━━`,
	rows: [
	{title: " | ", 
	description: "⊜ ❝❞",
	rowId: `${usedPrefix}`}]},*/
             
]}, ] 
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  let name = conn.getName(who) 

//let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `
*╭━━⊜ ⌊•  𝆬⃝𝆬⃝🌃️˖ 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁-𝗠𝗗•⌉_*
*┃🎋❏ 𝗛𝗼𝗹𝗮! @${m.sender.split`@`[0]}*
*╰━━━━━━━━━━━━━━━━⊜*
🏝️ ◉ 𝗜𝗻𝗳𝗼 𝗱𝗲𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼;
*━━━━┳━━━━━━━━━━━*
*╭━━━╯*
❏ 🔆 𝗡𝗶𝘃𝗲𝗹: *${level}*
❏ 💰 𝗖𝗼𝗶𝗻𝘀: *${global.db.data.users[who].money}*
❏ 💵 𝗠𝗼𝗻𝗲𝗱𝗮𝘀: *${global.db.data.users[who].limit}*
❏ 🔮 𝗘𝘅𝗽: *${global.db.data.users[who].exp}*
❏ 🎋 𝗥𝗼𝗹: *${global.db.data.users[who].role}*
*├━━━━━━━━━━━━━━━━⊜*
┃ *_${ucapan()}_*
┃◉ 👑 *Version; ${vs}*
╰━━┳━━━━━━━━━━━━━⊜
*╭━━╯━⊜ ⌊• USUARIOS; •⌉⊜━━━*
*┃🎆 ❏ ${rtotalreg}*
*╰━━━━━━━━━━━━━━━━⊜*`, footer: `${wm2}`, //${name} ${ucapan()}
title: null,
buttonText: "◉ 🗂️ 𝗦𝗲𝗹𝗲𝗰𝗰𝗶𝗼𝗻𝗮 𝘂𝗻𝗮 𝗼𝗽𝗰𝗶𝗼𝗻", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menulist|menus|listmenu|menu|help|comandos|cmd|menul)$/i
handler.exp = 20
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "❏ 🌉 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀!"
  if (time >= 4) {
    res = "❏ 🌇 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀!"
  }
  if (time >= 11) {
    res = "❏ 🏙️ 𝗕𝘂𝗲𝗻𝗮𝘀 𝘁𝗮𝗿𝗱𝗲𝘀!️"
  }
  if (time >= 15) {
    res = "❏ 🌆 𝗕𝘂𝗲𝗻𝗮𝘀 𝘁𝗮𝗿𝗱𝗲𝘀!️"
  }
  if (time >= 17) {
    res = "❏ 🌃 𝗕𝘂𝗲𝗻𝗮𝘀 𝗻𝗼𝗰𝗵𝗲𝘀!"
  }
  return res
}