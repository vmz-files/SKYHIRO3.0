const xp = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${SKYHIRO3} 〉*
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
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Verifique o seu nível
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Habilitando / desabilitando recursos de nivelamento
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mineração XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Habilitando / desabilitando recursos de eventos
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${Skyhiro}
--------------------------------
Note: Kamu pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivelamento.`
}
exports.xp = xp
