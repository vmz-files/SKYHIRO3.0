const tod = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${Paulo Hernani}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário Bot
╿
┷┯ *〈 CONFIAR OU OUSAR 〉*
   ╽
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Confiança aleatória
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Random Dare
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.tod = tod
