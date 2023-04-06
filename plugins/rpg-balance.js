let handler = async (m, { conn }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let msg = `*⊜─⌈🌅 ◜𝙒𝘼𝙇𝙇𝙀𝙏◞ 🌅⌋─⊜*
  
❏ 🎍 𝗛𝗼𝗹𝗮 @${m.sender.split`@`[0]} 𝗮𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗹𝗮 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝘀𝗼𝗯𝗿𝗲 𝘀𝘂𝘀 𝗱𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀, 𝗰𝗼𝗶𝗻𝘀 𝘆 𝗲𝘅𝗽;

❏ 💵 𝗖𝗼𝗶𝗻𝘀: *${global.db.data.users[who].money}*
❏ 🎋 𝗘𝘅𝗽: *${global.db.data.users[who].exp}*
❏ 💎 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀: *${global.db.data.users[who].limit}* `
let text = `*╭━━━⊜ ⌊• 🏷️ 𝘿𝘼𝙏𝙊 𝙀𝙓𝙏𝙍𝘼•⌉*
  *┃🎋❏* *P𝘂𝗲𝗱𝗲𝘀* 𝗰𝗼𝗺𝗽𝗿𝗮𝗿 𝗱𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 𝘂𝘀𝗮𝗻𝗱𝗼 𝗹𝗼𝘀 𝘀𝗶𝗴𝘂𝗶𝗲𝗻𝘁𝗲𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀;
*┃◜️🌃◞ #buy <cantidad>*
*┃◜🌌️◞ #buyall*
*┢━━━━━━━━━━━━━━━━━━*
*┃ 🏷️❏* *O también puedes comprar diamantes con _Coins_ usando lo siguiente;*
*┃◜🎇️◞ #buy2 <cantidad>*
*┃◜🎆️◞ #buyall2*
*╰━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, text, m)
}
handler.command = handler.help = ['bal', 'balance', 'wallet']
handler.tags = ['info']
export default handler