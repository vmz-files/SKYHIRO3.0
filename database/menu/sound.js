const sound = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${SKYHIRO3} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Criador* : ${Paulo Hernani}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar Detalhes Bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar Usuario Bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar Todos Os Usuarios Batepapo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar Velocidade Bot Conexao
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 TEXTO PARA O DISCURSO 〉*
   ╽
   ┠≽ *${prefix}tts* <código de linguagem|text>
   ┃ *Desc* : Texto para voz do Google
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.sound = sound
