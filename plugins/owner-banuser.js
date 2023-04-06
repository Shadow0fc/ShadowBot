let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `\`\`\`👤• Taguee a la persona o responda al mensaje para banear al usuario\`\`\`\n\n*◉ Ejemplo:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*❗• El usuario fue baneado correctamente.*\n\n*◉ No podras usar al bot asta que seas desbaneado.*')    }
handler.command = /^banuser|ban$/i
handler.mods = true
export default handler
