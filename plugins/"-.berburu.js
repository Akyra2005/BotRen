let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].as)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    let wm = global.botwm
    let buttons = [
{buttonId: '.kandang', buttonText: {displayText: '𝐊𝐀𝐍𝐃𝐀𝐍𝐆'}, type: 1}, 
]
const buttonMessage = {
    contentText: `⏳𝗖𝗢𝗢𝗟𝗗𝗢𝗪𝗡\n\n*Silahkan Menunggu Selama ${timers} Untuk Berburu Lagi*`,
    footerText: `${wm}`, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.db.data.users[m.sender].as > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 9)}`
let randomaku2 = `${Math.floor(Math.random() * 9)}`
let randomaku4 = `${Math.floor(Math.random() * 9)}`
let randomaku3 = `${Math.floor(Math.random() * 9)}`
let randomaku5 = `${Math.floor(Math.random() * 9)}`
let randomaku6 = `${Math.floor(Math.random() * 9)}`
let randomaku7 = `${Math.floor(Math.random() * 9)}`
let randomaku8 = `${Math.floor(Math.random() * 9)}`
let randomaku9 = `${Math.floor(Math.random() * 9)}`
let randomaku10 = `${Math.floor(Math.random() * 9)}`
let randomaku11 = `${Math.floor(Math.random() * 9)}`
let randomaku12 = `${Math.floor(Math.random() * 9)}`
.trim()

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`
zero7 = `${rbrb7}`
zero8 = `${rbrb8}`
zero9 = `${rbrb9}`
zero10 = `${rbrb10}`
zero11 = `${rbrb11}`
zero12 = `${rbrb12}`

hsl = `╭┅┅┅┅[ *HASIL BERBURU* ]┅┅┅┫ 
┋
┞ ${zero1} Ekor Banteng
┞ ${zero7} Ekor Kerbau
┞ ${zero2} Ekor Harimau
┞ ${zero8} Ekor Sapi
┞ ${zero3} Ekor Gajah 
┞ ${zero9} Ekor Monyet
┞ ${zero4} Ekor Kambing	 
┞ ${zero10} Ekor Babi Hutan
┞ ${zero5} Ekor Panda			 
┞ ${zero11} Ekor Babi
┞ ${zero6} Ekor Buaya		 
┞ ${zero12} Ekor Ayam
┋
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┫
`
global.db.data.users[m.sender].banteng += rbrb1
global.db.data.users[m.sender].harimau += rbrb2
global.db.data.users[m.sender].gajah += rbrb3
global.db.data.users[m.sender].kambing += rbrb4
global.db.data.users[m.sender].panda+= rbrb5
global.db.data.users[m.sender].buaya += rbrb6
global.db.data.users[m.sender].kerbau += rbrb7
global.db.data.users[m.sender].sapi += rbrb8
global.db.data.users[m.sender].monyet += rbrb9
global.db.data.users[m.sender].babihutan += rbrb10
global.db.data.users[m.sender].babi += rbrb11
global.db.data.users[m.sender].ayam += rbrb12

setTimeout(() => {
                     conn.sendButton(m.chat, hsl, wm, '𝐊𝐀𝐍𝐃𝐀𝐍𝐆', '#kandang',m)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`*DUAR*`)
                      }, 18000)
                    
                     setTimeout(() => {
                     m.reply('```KPUMNN❗```')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('```DORR DORRR🔫```')
                     }, 14000) 
                     
                     setTimeout(() => {
                     m.reply('```⏳Sedang Berburu```')
                     }, 0) 
  user.as = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)$/i
handler.register = true
module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}