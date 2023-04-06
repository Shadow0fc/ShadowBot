let handler = async (m, { conn, usedPrefix }) => {
let msg = `
    *━━━⊜ ⌊• 3 •⌉⊜━━━*
*🎋❏ Hola! @${m.sender.split`@`[0]}, aqui esta el menu de gestion en grupos.*
*⊜━━━━━━━━━━━━━━━━⊜*
❏ 🏷️ _${usedPrefix}add *<numero>*_
❏ 🏷️ _${usedPrefix}kick *<@tag>*_
❏ 🏷️ _${usedPrefix}kick2 *<@tag>*_
❏ 🏷️ _${usedPrefix}listanum *<texto>*_
❏ 🏷️ _${usedPrefix}kicknum *<texto>*_
❏ 🏷️ _${usedPrefix}grupo *<abrir / cerrar>*_
❏ 🏷️ _${usedPrefix}grouptime *<opcion>*_
❏ 🏷️ _${usedPrefix}promote *<@tag>*_
❏ 🏷️ _${usedPrefix}demote *<@tag>*_
❏ 🏷️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
❏ 🏷️ _${usedPrefix}demote *<@tag>*_
❏ 🏷️ _${usedPrefix}infogroup_
❏ 🏷️ _${usedPrefix}resetlink_
❏ 🏷️ _${usedPrefix}link_
❏ 🏷️ _${usedPrefix}setname *<texto>*_
❏ 🏷️ _${usedPrefix}setdesc *<texto>*_
❏ 🏷️ _${usedPrefix}invocar *<texto>*_
❏ 🏷️ _${usedPrefix}setwelcome *<texto>*_
❏ 🏷️ _${usedPrefix}setbye *<texto>*_
❏ 🏷️ _${usedPrefix}hidetag *<texto>*_
❏ 🏷️ _${usedPrefix}hidetag *<audio>*_
❏ 🏷️ _${usedPrefix}hidetag *<video>*_
❏ 🏷️ _${usedPrefix}hidetag *<imagen>*_
❏ 🏷️ _${usedPrefix}warn *<@tag>*_
❏ 🏷️ _${usedPrefix}unwarn *<@tag>*_
❏ 🏷️ _${usedPrefix}listwarn_
❏ 🏷️ _${usedPrefix}fantasmas_
❏ 🏷️ _${usedPrefix}destraba_
❏ 🏷️ _${usedPrefix}setpp *<imagen>*_
*⊜━━━━━━━━━━━━━━━━⊜*`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['menu3']
handler.tags = ['info']
export default handler