let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '🏝️  𝗡𝗼𝘃𝗮𝘁𝗼 𝗹 ⚜'
        : ((user.level >= 3) && (user.level <= 6)) ? '🏝️  𝗡𝗼𝘃𝗮𝘁𝗼 ll ⚜'
            : ((user.level >= 6) && (user.level <= 9)) ? '🏝️  𝗡𝗼𝘃𝗮𝘁𝗼 ll𝗹 ⚜'
                : ((user.level >= 9) && (user.level <= 12)) ? '🏟️  𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇 𝗹 🥃'
                : ((user.level >= 12) && (user.level <= 20)) ? '🏟️  𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇 𝗹l 🥃'
                : ((user.level >= 20) && (user.level <= 25)) ? '🏟️  𝗔𝗽𝗿𝗲𝗻𝗱𝗶𝘇 𝗹l 🥃'
                : ((user.level >= 25) && (user.level <= 30)) ? '🎋 𝗔𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿𝗼 𝗹 🎍'
                : ((user.level >= 30) && (user.level <= 35)) ? '🎋 𝗔𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿𝗼 𝗹l 🎍'
                : ((user.level >= 35) && (user.level <= 40)) ? '🎋 𝗔𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿𝗼 𝗹ll 🎍'
                : ((user.level >= 40) && (user.level <= 45)) ? '⚠️ 𝗦𝗵𝗮𝗱𝗼𝘄 𝗹 🧫'
                : ((user.level >= 45) && (user.level <= 50)) ? '⚠️ 𝗦𝗵𝗮𝗱𝗼𝘄 𝗹l 🧫'
                : ((user.level >= 50) && (user.level <= 55)) ? '⚠️ 𝗦𝗵𝗮𝗱𝗼𝘄 ll𝗹 🧫'
                : ((user.level >= 55) && (user.level <= 60)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 𝗹 🔰'
                : ((user.level >= 60) && (user.level <= 70)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 l𝗹 🔰'
                : ((user.level >= 70) && (user.level <= 80)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 𝗹ll 🔰'
                : ((user.level >= 80) && (user.level <= 90)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 𝗹V 🔰'
                : ((user.level >= 90) && (user.level <= 100)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 V 🔰'
                : ((user.level >= 100) && (user.level <= 150)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 V𝗹 🔰'
                : ((user.level >= 150) && (user.level <= 300)) ? '🔮 𝗧𝗵𝗲 𝗚𝗼𝗱 Vl𝗹 🔰'
                : ((user.level >= 300) && (user.level <= 1000)) ? '🔱 𝗧𝗵𝗲 𝗚𝗼𝗱 𝗼𝗳 𝗘𝘃𝗲𝗿𝘆𝘁𝗵𝗶𝗻𝗴 🧬'
                : ((user.level >= 1000) && (user.level <= 5000)) ? '🏞️ 𝗧𝗵𝗲 𝗚𝗼𝗱 𝗼𝗳 𝗦𝗵𝗮𝗱𝗼𝘄 ⚫️'
                : ((user.level >= 5000) && (user.level <= 12000)) ? '🌌 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗼𝗳 𝗦𝗵𝗮𝗱𝗼𝘄 📡'
                
    //user.role = role
    return true
}

export default handler