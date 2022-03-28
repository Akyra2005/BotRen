global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != conn.user.jid || !/^「 MATH GAME 」\n\nPertanyaan :\nBerapa hasil dari/i.test(m.quoted.text)) throw false
  if (!(id in global.math)) throw 'Soal itu telah berakhir'
  if (m.quoted.id == global.math[id][0].id) {
  let math = global.math[id][1]
  if (m.text == math.result) {
    conn.reply(m.chat, `*Jawaban BENAR⭕*\n🎁Prize +${math.bonus} XP`, m)
    global.db.data.users[m.sender].exp += math.bonus
    clearTimeout(global.math[id][3])
    delete global.math[id]
  } else {
    if (--global.math[id][2] == 0) {
      conn.reply(m.chat, `*Kesempatan HABIS✖️*\nJawaban: *${math.result}*`, m)
      clearTimeout(global.math[id][3])
      delete global.math[id]
    } else conn.reply(m.chat, `*Jawaban SALAH❌*\nMasih Ada ${global.math[id][2]} Kesempatan`, m)
  }
 }
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
