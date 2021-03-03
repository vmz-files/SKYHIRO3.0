const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versao* : 0.0.5
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar Bot Detalhes
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar Usuario Bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar Todos Os Usuarios De Batepapo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar Conexao Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar Bug Pro Dono Bot
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Envio Imagem Aleatoria Hentai
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Envio Aleatorio NSFW Trap Imagem (nsfw needed)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Envio Aleatorio NSFW Neko Imagem (nsfw needed)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
