import fetch from "node-fetch";
import yts from "yt-search";
/**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text)
    throw `*◉ ⚠️ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗶𝗻𝘁𝗿𝗼𝗱𝘂𝘇𝗰𝗮 𝗲𝗹 𝗻𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗮𝘂𝗱𝗶𝗼/𝘃𝗶𝗱𝗲𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮 𝗯𝘂𝘀𝗰𝗮𝗿.*\n\n*◉ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:*\n*${usedPrefix + command} Black Catcher - Black Clover*`;
  try {
    const yt_play = await search(args.join(" "));
    let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
❏ 📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${yt_play[0].title}
❏ 📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗱𝗼:* ${yt_play[0].ago}
❏ ⌚ *𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *𝗔𝘂𝘁𝗼𝗿:* ${yt_play[0].author.name}
❏ ⏯️ *𝗖𝗮𝗻𝗮𝗹:* ${yt_play[0].author.url}
❏ 🆔 *𝗜𝗗:* ${yt_play[0].videoId}
❏ 🪬 *𝗧𝗶𝗽𝗼:* ${yt_play[0].type}
❏ 🔗 *𝗟𝗶𝗻𝗸:* ${yt_play[0].url}`.trim();
    const buttons = [
      {
        buttonId: `#ytmp3 ${yt_play[0].url}`,
        buttonText: { displayText: "❏ 🎵 AUDIO" },
        type: 1,
      },
      {
        buttonId: `#ytmp4 ${yt_play[0].url}`,
        buttonText: { displayText: "❏B🎥 VIDEO" },
        type: 1,
      },
      {
        buttonId: `#calidades ${yt_play[0].url}`,
        buttonText: { displayText: "❏ 📋 Calidades" },
        type: 1,
      },
    ];
    let buttonMessage = {
      document: { url: "https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH" },
      fileName: "❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ",
      mimetype: "application/vnd.ms-excel",
      caption: texto1,
      fileLength: "99999999999999",
      mentions: [m.sender],
      footer: wm,
      buttons: buttons,
      headerType: 4,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: `${yt_play[0].title}`,
          mediaType: 2,
          previewType: "VIDEO",
          thumbnailUrl: yt_play[0].image,
          mediaUrl: `${yt_play[0].url}`,
          sourceUrl: `https://chat.whatsapp.com/JQMyVsc8U4iEHi7qLFgYNH`,
        },
      },
    };
    conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch {
    try {
      let vid2 = await (
        await fetch(
          `https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`
        )
      ).json();
      let { videoId, title, views, published, thumbnail } = await vid2
        .result[0];
      const url = "https://www.youtube.com/watch?v=" + videoId;
      let ytLink = await fetch(
        `https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`
      );
      let jsonn = await ytLink.json();
      let aud = await jsonn.result.audio;
      let capt = `❏ 📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}\n❏ 📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗱𝗼:* ${published}\n❏ 👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${views}\n❏ 🔗 *𝗟𝗶𝗻𝗸:* ${url}`;
      const buttons = [
        {
          buttonId: `#playlist ${title}`,
          buttonText: { displayText: "📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋" },
          type: 1,
        },
      ];
      const buttonMessage = {
        image: { url: thumbnail },
        caption: capt,
        footer: "*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*",
        buttons: buttons,
        headerType: 4,
      };
      let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

      conn.sendMessage(
        m.chat,
        {
          audio: { url: aud },
          mimetype: "audio/mp4",
          fileName: `${title}.mp3`,
        },
        { quoted: msg }
      );
    } catch {
      throw "*◉ ❗ Error, por favor vuelva a intentalo...*";
    }
  }
};
handler.help = ["play", "play2"].map((v) => v + " < busqueda >");
handler.tags = ["downloader"];
handler.command = /^play?$/i;
export default handler;