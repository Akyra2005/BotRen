let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.lolhuman.xyz/api/random/cecan?apikey=AryaKey`)
  heum = await res.buffer()
  await m.reply(global.wait)
  conn.sendButtonImg(m.chat, heum, 'This Is CECAN', wm, '𝐍𝐄𝐗𝐓⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['cecan']
handler.tags = ['image']

handler.command = /^(cecan)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.limit = 2
handler.fail = null

module.exports = handler

