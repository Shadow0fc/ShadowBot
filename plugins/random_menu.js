let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 5 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu random y/ frases.*
*⊜━━━━━━━━━━━━━━━━⊜*
*🍁◉ FRASES;*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🖼️ _${usedPrefix}piropo_
❏ 🖼️ _${usedPrefix}consejo_
❏ 🖼️ _${usedPrefix}fraseromantica_
❏ 🖼️ _${usedPrefix}historiaromantica_
*⊜━━━━━━━━━━━━━━━━⊜*
*🗄️◉ COMANDOS RANDOM;*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🌟 _${usedPrefix}kpop *<blackpink*_
❏ 🌟 _${usedPrefix}cristianoronaldo_
❏ 🌟 _${usedPrefix}messi_
❏ 🌟 _${usedPrefix}cat_
❏ 🌟 _${usedPrefix}dog_
❏ 🌟 _${usedPrefix}meme_
❏ 🌟 _${usedPrefix}itzy_
❏ 🌟 _${usedPrefix}blackpink_
❏ 🌟 _${usedPrefix}lolivid_
❏ 🌟 _${usedPrefix}loli_
❏ 🌟 _${usedPrefix}navidad_
❏ 🌟 _${usedPrefix}ppcouple_
❏ 🌟 _${usedPrefix}wpmontaña_
❏ 🌟 _${usedPrefix}pubg_
❏ 🌟 _${usedPrefix}wpgaming_
❏ 🌟 _${usedPrefix}wpaesthetic_
❏ 🌟 _${usedPrefix}wpaesthetic2_
❏ 🌟 _${usedPrefix}wprandom_
❏ 🌟 _${usedPrefix}wallhp_
❏ 🌟 _${usedPrefix}wpvehiculo_
❏ 🌟 _${usedPrefix}wpmoto_
❏ 🌟 _${usedPrefix}coffee_
❏ 🌟 _${usedPrefix}pentol_
❏ 🌟 _${usedPrefix}caricatura_
❏ 🌟 _${usedPrefix}ciberespacio_
❏ 🌟 _${usedPrefix}technology_
❏ 🌟 _${usedPrefix}doraemon_
❏ 🌟 _${usedPrefix}hacker_
❏ 🌟 _${usedPrefix}planeta_
❏ 🌟 _${usedPrefix}randomprofile_
❏ 🌟 _${usedPrefix}neko_
❏ 🌟 _${usedPrefix}waifu_
❏ 🌟 _${usedPrefix}akira_
❏ 🌟 _${usedPrefix}akiyama_
❏ 🌟 _${usedPrefix}anna_
❏ 🌟 _${usedPrefix}asuna_
❏ 🌟 _${usedPrefix}ayuzawa_
❏ 🌟 _${usedPrefix}boruto_
❏ 🌟 _${usedPrefix}chiho_
❏ 🌟 _${usedPrefix}chitoge_
❏ 🌟 _${usedPrefix}deidara_
❏ 🌟 _${usedPrefix}erza_
❏ 🌟 _${usedPrefix}elaina_
❏ 🌟 _${usedPrefix}eba_
❏ 🌟 _${usedPrefix}emilia_
❏ 🌟 _${usedPrefix}hestia_
❏ 🌟 _${usedPrefix}hinata_
❏ 🌟 _${usedPrefix}inori_
❏ 🌟 _${usedPrefix}isuzu_
❏ 🌟 _${usedPrefix}itachi_
❏ 🌟 _${usedPrefix}itori_
❏ 🌟 _${usedPrefix}kaga_
❏ 🌟 _${usedPrefix}kagura_
❏ 🌟 _${usedPrefix}kaori_
❏ 🌟 _${usedPrefix}keneki_
❏ 🌟 _${usedPrefix}kotori_
❏ 🌟 _${usedPrefix}kurumi_
❏ 🌟 _${usedPrefix}madara_
❏ 🌟 _${usedPrefix}mikasa_
❏ 🌟 _${usedPrefix}miku_
❏ 🌟 _${usedPrefix}minato_
❏ 🌟 _${usedPrefix}naruto_
❏ 🌟 _${usedPrefix}nezuko_
❏ 🌟 _${usedPrefix}sagiri_
❏ 🌟 _${usedPrefix}sasuke_
❏ 🌟 _${usedPrefix}sakura_
❏ 🌟 _${usedPrefix}cosplay_
*⊜━━━━━━━━━━━━━━━━⊜*`

conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu5']
handler.tags = ['info']
export default handler