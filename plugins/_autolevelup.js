let handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let str = `Selamat @${m.sender.split`@`[0]} Anda Naik 🧬level 
*${before}* --> *${user.level}*
`.trim()
        conn.reply(m.chat, str, false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return false
}
 
module.exports = handler
