let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks Nya.\nContoh !polio kiri|Perkawinan Silang Ayam Dengan Manusaia Menyebabkan Keguguran Pada Induk Ayam.'
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
  let res = await fetch(`http://zekais-api.herokuapp.com/folio${response[0]}?text=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', mess.sukses, m, false)
}
handler.help = ['polio'].map(v => v + ' <kanan/kiri|teks>')
handler.tags = ['nulis']

handler.command = /^(polio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
