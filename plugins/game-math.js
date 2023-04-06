global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*◉ ⚠️ 𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝗹𝗮 𝗱𝗶𝗳𝗶𝗰𝘂𝗹𝘁𝗮𝗱 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮 𝗷𝘂𝗴𝗮𝗿.*

*◉ 🗂 𝗗𝗶𝗳𝗶𝗰𝘂𝗹𝘁𝗮𝗱𝗲𝘀 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀️: ${Object.keys(modes).join(' | ')}*
*▣ ℹ️ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼 𝗱𝗲 𝘂𝘀𝗼: ${usedPrefix}mates medium*
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝗘𝗔𝗦𝗬', `${usedPrefix + command} easy`], 
['𝗠𝗘𝗗𝗜𝗨𝗠', `${usedPrefix + command} medium`], 
['𝗛𝗔𝗥𝗗', `${usedPrefix + command} hard`],//], m)
['𝗡𝗶𝘃𝗲𝗹 𝗦𝗵𝗮𝗱𝗼𝘄', `${usedPrefix + command} shadow`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['𝗘𝗔𝗦𝗬', `${usedPrefix + command} easy`], 
['𝗠𝗘𝗗𝗜𝗨𝗠', `${usedPrefix + command} medium`], 
['𝗛𝗔𝗥𝗗', `${usedPrefix + command} hard`],//], m)
['𝗡𝗶𝘃𝗲𝗹 𝗦𝗵𝗮𝗱𝗼𝘄', `${usedPrefix + command} shadow`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*◉ ⚠️ 𝗧𝗼𝗱𝗮𝘃𝗶𝗮 𝗵𝗮𝘆 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮𝘀 𝗲𝗻 𝗲𝘀𝘁𝗲 𝗰𝗵𝗮𝘁!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `◉ 🎁 𝗖𝘂𝗮𝗻𝘁𝗼 𝗲𝘀 𝗲𝗹 𝗿𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲: *${math.str}*?\n\n*⏳ 𝗧𝗶𝗲𝗺𝗽𝗼: ${(math.time / 1000).toFixed(2)} sᴇᴄᴏɴᴅs*\n*🏆 𝗚𝗮𝗻𝗮 𝗮𝘀𝘁𝗮: ${math.bonus} xᴘ*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*◉ ℹ️ 𝗘𝗹 𝗷𝘂𝗲𝗴𝗼 𝗮 𝗳𝗶𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼!!*\n\n*◉ ⚠️ 𝙇𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙚𝙨: ${math.result}*`, author, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
shadow: [1, 2, 3, 4, '+-', 10, 20]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
