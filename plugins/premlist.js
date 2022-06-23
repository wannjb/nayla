let fs = require('fs')

let handler = async (m, { conn, isOwner }) => {

  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

  conn.reply(m.chat, `┍━━〔List Premium〕━⬢` + `\n` + prem.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n┕━━━⬢', m, { contextInfo: { mentionedJid: prem } })
  
}

handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.off = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 0

module.exports = handler
