async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*◉ 🏟️ 𝗔𝗾𝘂𝗶 𝗲𝘀𝘁𝗮 𝗹𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝘀𝘂𝗯𝗯𝗼𝘁𝘀 𝗮𝗰𝘁𝗶𝘃𝗼𝘀, 𝗣𝘂𝗲𝗱𝗲𝘀 𝗶𝗿 𝘆 𝗽𝗲𝗱𝗶𝗿𝗹𝗲𝘀 𝗾𝘂𝗲 𝘀𝗲 𝘂𝗻𝗮𝗻 𝗮 𝘁𝘂 𝗴𝗿𝘂𝗽𝗼.*\n◉ 🏝️ 𝗦𝗶 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗲𝘀𝘁𝗮 𝗲𝗻 𝗯𝗹𝗮𝗻𝗰𝗼 𝗲𝘀 𝗽𝗼𝗿𝗾𝘂𝗲 𝗻𝗼 𝗵𝗮𝘆 𝘀𝘂𝗯𝗯𝗼𝘁𝘀 𝗮𝗰𝘁𝗶𝘃𝗼𝘀.\n\n◉ 🎋 𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮 𝗾𝘂𝗲 𝘀𝗼𝗻 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝘀, 𝗻𝗼 𝘃𝗮𝗹𝗹𝗮𝘀 𝘆 𝗵𝗮𝗴𝗮𝘀 𝘀𝗽𝗮𝗺 𝗲𝗻 𝘀𝘂 𝗰𝗵𝗮𝘁.\n\n◉ ⚠️ 𝗡𝗼 𝗻𝗼𝘀 𝗵𝗮𝗰𝗲𝗺𝗼𝘀 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗮𝗯𝗹𝗲𝘀 𝗱𝗲 𝗹𝗼 𝗾𝘂𝗲 𝗽𝗮𝘀𝗲 𝗲𝗻 𝗲𝘀𝗲 𝗰𝗵𝗮𝘁.')
await m.reply(users.map(v => '◉ 🎋 𝗦𝘂𝗯𝗯𝗼𝘁 𝗔𝗰𝘁𝗶𝘃𝗼: wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
