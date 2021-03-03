const limit = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexao
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LIMITE 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Verifique Seus Limites
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Verifique Seu Dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Limite Compra
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Voce pode comprar limites coletando dinheiro primeiro. Verifique seu dinheiro digitando comandos *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Voce pode arrecadar dinheiro de uma maneira chat com amigos em um grupo ou voce pode subir level.`
}
exports.limit = limit
