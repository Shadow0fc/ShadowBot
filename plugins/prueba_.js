let handler = async (m, { conn, usedPrefix }) => {

let pp = 'https://telegra.ph/file/dff895a5d500768573735.jpg'

let wms = global.wm2

let msg = `

    *━━━⊜ ⌊• VIRUS •⌉⊜━━━*

*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de virus mata WhatsApp.*

*⊜━━━━━━━━━━━━━━━━⊜*

❏🦠 _${usedPrefix}crash𝟷_

❏🦠 _${usedPrefix}crash2_

❏🦠 _${usedPrefix}crash3_

❏🦠 _${usedPrefix}crash4_

❏🦠 _${usedPrefix}crash5_

❏🦠 _${usedPrefix}crash6_

❏🦠 _${usedPrefix}crash7_

❏🦠 _${usedPrefix}crash8_

*⊜━━━━━━━━━━━━━━━━⊜*` 

//.trim()

conn.sendButton(m.chat, msg, 'ׄː ${wms}\n\n⌛️• ${global.author}\n', pp, [

      ['◉ 🧿 𝗢𝘄𝗻𝗲𝗿', `#owner`],

      ['◉ 🥃 𝗜𝗻𝗳𝗼𝗯𝗼𝘁', `#botinfo`],

      ['◉ 🔰 𝗚𝗿𝘂𝗽𝗼', `#gruposofc`]

    ],m)

  

    m.react('🌌') 

    

 /* } catch (e) {

    conn.reply(m.chat, '❎|•Lo sentimos, el menú tiene un error', m)

    throw e

  }*/

}

handler.help = ['help']

handler.tags = ['main']

handler.command = ['menu0'] 

handler.register = true

handler.exp = 3

export default handler