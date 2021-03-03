exports.wait = () => {
        return `⌛ ESPERA ⌛`
}

exports.timeEnd = () => {
        return `Tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *habilitar nivelamento*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desabilitar nivelamento*`
}

exports.levelnol = () => {
        return `*SEU NIVEL AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falhou, um erro ocorreu while converting the image to a sticker ❌`
}

exports.Iv = () => {
        return `❌ Invalid link ❌`
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
        return `[❗] This command can only be used by group admins! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 NOT YET REGISTERED 」──\nOla mana !\nVoce ainda nao se cadastrou, vamos registrar primeiro... \n\nComando : ${prefix}Nome de registro|era\nExemplo : ${prefix}register Screamo|26`
}

exports.daftarD = () => {
        return `*「 JA SE REGISTRO 」*\n\n*you have registered in the bot database*`
}

exports.wrongf = () => {
        return`*Incorrect format / blank text*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRATION 」*\n\nif you haven't got the message. means you haven't saved your bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRAR DADOS 」*\n\nvoce se registrou with data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Numero : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Era : ${umurUser} \n  ├─ ❏ Registrar Hora : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : NAO ESQUECA ESTE NUMERO PORQUE E IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* not found \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*sorry but ${pushname} not the owner script*`
}

exports.limitend = (pushname) => {
        return`*sorry ${pushname} O Limite de hoje aumentou*\n*Limite e zerado a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT CONTA 」*
o resto de seu limite : ${limitCounts}

NOTA : para chegar ao limite. pode passar de nivel ou comprar limite`
}

exports.satukos = () => {
        return`*Add parametros 1 (enable) or 0 (disable)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCO*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Grana* : ${uangkau}`
}
