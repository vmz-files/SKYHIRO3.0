exports.wait = () => {
        return `⌛ Espera ⌛`
}

exports.timeEnd = () => {
        return `Tempo Acabou`
}

exports.succsess = () => {
        return `✔️ Funciona ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *o nivelamento esta ativo*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desabilitar nivelamento*`
}

exports.levelnol = () => {
        return `*NIVEL DE IRMAO AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌`
}

exports.Iv = () => {
        return `❌ Link invalido ❌`
}

exports.group = () => {
        return `[❗] Este comando so pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando so pode ser usado pelo grupo proprietario! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo proprietario de bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado por administradores de grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NAO REGISTRADO 」──\nOla mana !\nVoce ainda nao se Cadastrou, register vamos primeiro... \n\nComando : ${prefix}register nome|umur\nExemplo : ${prefix}register Screamo|16`
}

exports.daftarD = () => {
        return `*「 JA SE REGISTRO 」*\n\n*Voce tem register no banco de dados bot*`
}

exports.wrongf = () => {
        return`*formato incorreto / texto em branco*`
}

exports.clears = () => {
        return`*limpar todo o Sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\n para saber se voce se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se voce nao entendeu a mensagem. significa que voce nao salvou o numero bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTRO 」*\n\nvoce se registrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Registro Tempo : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \n NAO ESQUECA ESTE NUMERO PORQUE E IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*desculpe, mas ${pushname} nao o script dono*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} o limite de hoje acabou*\n*o limite e zerado toda vez depois de 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE CONT A」*
sisa limit anda : ${limitCounts}

NOTA : para chegar ao limite. pode passar de nivel ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parametros 1/enable ou 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
