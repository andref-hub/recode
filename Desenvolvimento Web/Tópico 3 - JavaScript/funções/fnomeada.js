function formatarMensagem (textodeEntrada) {
    if (textodeEntrada == undefined)
    return '...';

    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();
    let msg_formatada = hora + ':' + min + ':' + seg + ' - ' + textodeEntrada;

    return msg_formatada;
}

console.log (formatarMensagem("Um texto qualquer"));
// Texto repassado

console.log (formatarMensagem());
// Como não fora usado nenhum parâmentro para o textodeEntrada a resposta é undefined e retornará '...'

console.log (formatarMensagem("Outro texto qualquer"));
// O texto é mudado aqui