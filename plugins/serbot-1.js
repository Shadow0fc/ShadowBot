/*Jadibot Exclusivo de The-Mystic-Bot
Si intentas adaptar este codigo a otro bot, Probablemente no funcione :P
-Aiden
*/


const { MessageType, useMultiFileAuthState, DisconnectReason, Browsers } = await import("@adiwajshing/baileys")
import qrcode from "qrcode"
import fs from "fs"
import P from 'pino';
import * as ws from 'ws';
const {child , spawn, exec} = await import('child_process');
const { CONNECTING } = ws
import { makeWASocket, protoType, serialize } from '../lib/simple.js';
let check1 = "NjBhZGVmZWI4N2M2"
let check2 = "ZThkMmNkOGVlMDFmZD"
let check3 = "UzYTI1MTQgIGluZ"
let check4 = "m8tZG9uYXIuanMK"
let check5 = "NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO"
let check6 = "DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz"
let check8 = "NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo"
//
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx= `─━━🎍◉ 𝗦𝗲𝗿 𝗦𝘂𝗯𝗯𝗼𝘁 ━━─
*𝗘𝘀𝗰𝗮𝗻𝗲𝗮 𝗲𝘀𝘁𝗲 𝗤𝗥 𝗽𝗮𝗿𝗮 𝘀𝗲𝗿 𝘂𝗻 𝘀𝘂𝗯𝗯𝗼𝘁 (っ.❛ ᴗ ❛.)っ*
━━━━━━━━━━━━━━━━`
if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []
/*let texto1 = `
*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰𝚂 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝙱𝙾𝚃 (#𝚜𝚎𝚛𝚋𝚘𝚝, #𝚓𝚊𝚍𝚒𝚋𝚘𝚝, #𝚋𝚘𝚝𝚜, #𝚐𝚎𝚝𝚌𝚘𝚍𝚎, #𝚜𝚞𝚋𝚋𝚘𝚝𝚜, #𝚜𝚎𝚛𝚜𝚞𝚋𝚋𝚘𝚝) PUEDEN LLEGAR A DEJAR DE FUNCIONAR AL ESTAR EN UNA ETAPA TEMPRANA*

*—◉ 𝙿𝚄𝙴𝙳𝙴 𝙿𝚁𝙾𝙱𝙰𝚁 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙳𝙴𝚂𝙳𝙴 𝙲𝙴𝚁𝙾 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝙳𝙾 𝚄𝙽𝙾 𝙳𝙴 𝙻𝙾𝚂 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻𝙴𝚂 𝚀𝚄𝙴 𝙷𝙰𝚈 𝙴𝙽 𝙴𝙻 𝙲𝙰𝙽𝙰𝙻 𝙳𝙴 𝚃𝙷𝙴 𝚂𝙷𝙰𝙳𝙾𝚆 𝙱𝚁𝙾𝙺𝙴𝚁𝚂*
*◉ https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA*
`
*/

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  let parentw = conn
  if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, '⚠️〉𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘴𝘦 𝘱𝘶𝘦𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘯 𝘦𝘭 𝘉𝘰𝘵 𝘱𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭: wa.me/' + global.conn.user.jid.split`@`[0], m)
  const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
  exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
    //if (err) return m.reply("Error! Fallo al comprobar la integridad del bot")
    const buffdr = Buffer.from(check1 + check2 + check3 + check4 + check5 + check6 + check8 + "=", 'base64')
    const drmer = Buffer.from(drm1 + drm2, 'base64')
    //console.log(Buffer.from(stdout, 'utf-8').toString('base64'))
    //console.log(check1 + check2 + check3 + check4 + check5 + check6 + check8 + "=")
    //if (stdout !== buffdr.toString('utf-8')) return m.reply('Este bot ha sido modificado o este comando no esta en el bot original, Por favor intente con el bot original')
  

  /*if (!global.db.data.settings[conn.user.jid].jadibot) return conn.sendButton(m.chat, 'Jadibot tidak aktif', '', isOwner ? `Aktifkan` : `Owner`, isOwner ? `${usedPrefix}1 jadibot` : `${usedPrefix}owner`, m)
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new global.conn.constructor()
    conn.version = global.conn.version
    conn.browserDescription = ['wabot-aq', '', '5.0']
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.welcome = global.conn.welcome + ''
    conn.bye = global.conn.bye + ''
    conn.spromote = global.conn.spromote + ''
    conn.sdemote = global.conn.sdemote + ''
    conn.handler = global.conn.handler.bind(conn)
    conn.onDelete = global.conn.onDelete.bind(conn)
    conn.onParticipantsUpdate = global.conn.onParticipantsUpdate.bind(conn)
    conn.onCall = global.conn.onCall.bind(conn)
    conn.on('chat-update', conn.handler)
    conn.on('message-delete', conn.onDelete)
    conn.on('group-participants-update', conn.onParticipantsUpdate)
    conn.on('CB:action,,call', conn.onCall)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({ user }) => {
      parent.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2), m)
      if (auth) return
      await parent.sendMessage(user.jid, `Kamu bisa login tanpa qr dengan pesan dibawah ini. untuk mendapatkan kode lengkapnya, silahkan kirim *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `Koneksi terputus...`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot'*/
  async function jddt() {
  function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
  //if (args[0] && !fs.existsSync("./jadibts/" + args[0])) return parentw.sendMessage(m.chat, {text : "Esa ID de serbot no existe..."}, { quoted: m })
    let uniqid = randomString(10)
    if (!fs.existsSync("./jadibts/"+ uniqid)){
        fs.mkdirSync("./jadibts/"+ uniqid, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./jadibts/" + uniqid + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
  const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + uniqid)


const connectionOptions = {
printQRInTerminal: true,
auth: state,
logger: P({ level: 'silent'}),
browser: ["Darkness-SubBot", "Firefox", "5.0"],
}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    if (qr) parentw.sendMessage(m.chat, {image: await qrcode.toBuffer(qr, { scale: 8 }) , caption : rtx + drmer.toString("utf-8")}, { quoted: m })
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    console.log(code)
    if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)
      if (code !== DisconnectReason.connectionClosed){ parentw.sendMessage(m.chat, {text : "La conexión se cerró, se intentara reconectar automáticamente..."}, { quoted: m })
    console.log(await creloadHandler(true).catch(console.error))}
    else {
        parentw.sendMessage(m.chat, {text : "La conexión se cerró, Tendras que conectarte manualmente..."}, { quoted: m })
    }

    }
    if (global.db.data == null) loadDatabase()
    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parentw.sendMessage(m.chat, {text : args[0] ? "Conectado con éxito!" : "Conectado con éxito! En unos segundos te mandaremos el Id que debes usar para volver a conectarte..."}, { quoted: m })
    await sleep(5000)
    if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })


    //await parentw.sendMessage(m.chat, {text : texto1}, { quoted: m })
    //await conn.sendMessage(conn.user.jid, {text : "Hola! Me he conectado como SubBot, Aiden"}, MessageType.text)
    //console.log(chalk.yellow('▣──────────────────────────────···\n│\n│❧ 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ✅\n│\n▣──────────────────────────────···'))}
    }
  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
      conn.ev.removeAllListeners()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }}, 60000)
    

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.welcome = '*• Holaa :D Bienvenido/a al grupo!!*\n*━━━━━━━━━━━━━━━━*\n\n🌺 *• Nombre:* @user\n🌿 *• Bio:* @desc\n\n- *recuerda leer las reglas del grupo* -'
conn.bye = '*👋 Hasta pronto, no te extrañaremos XD!!*\n*━━━━━━━━━━━━━━━━*\n\n🐢 *• Nombre:* @user\n🎋 *• Bio:* @desc\n\n- *Salúdame a Maradona bro* -'
conn.spromote = '*⎡ •⚠️ Nuevo Admin detectado ⚠️• ⎦*\n*━━━━━━━━━━━━━━━━*\n🐢 *• Nombre:* @user\n🕒\n*━━━━━━━━━━━━━━━━*'
conn.sdemote = '❏ 🍃 *_@user ha dejado de ser administrador._*'
conn.sDesc = '❏ 🍃 *_Se ha modificado la descripción del grupo._*\n\n*Nueva Descripción:* @desc'
conn.sSubject = '❏ 🍃 *_Se ha modificado el nombre del grupo._*\n*Nuevo Nombre:* @subject'
conn.sIcon = '❏ 🍃 *_Se ha cambiado la foto del grupo._*'
conn.sRevoke = '❏ 🍃 *_Se ha actualizado el link del grupo._*\n*Link Nuevo:* @revoke'

  
/*conn.welcome = '*╔══════════════*\n*╟❧ @subject*\n*╠══════════════*\n*╟❧ @user*\n*╟❧ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾/𝙰* \n*║*\n*╟❧ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*\n*╟❧* @desc\n*║*\n*╟❧ 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝚃𝚄 𝙴𝚂𝚃𝙰𝙳𝙸𝙰!!*\n*╚══════════════*'
conn.bye = '*╔══════════════*\n*╟❧ @user*\n*╟❧ 𝙷𝙰𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾 👋🏻* \n*╚══════════════*'
conn.spromote = '*@user 𝚂𝙴 𝚂𝚄𝙼𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂!!*'
conn.sdemote = '*@user 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 !!*'
conn.sDesc = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n*𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* @desc'
conn.sSubject = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴:* @subject'
conn.sIcon = '*𝚂𝙴 𝙷𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*'
conn.sRevoke = '*𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*\n*𝙻𝙸𝙽𝙺 𝙽𝚄𝙴𝚅𝙾:* @revoke'*/

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})
}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^(jadibot|serbot|getcode)/i

handler.limit = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}