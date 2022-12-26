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

let anonima = formatarMensagem;

console.log (anonima("Um texto qualquer"));

console.log (anonima());

console.log (anonima("Outro texto qualquer"));

/*
 É possível também, armazená-la em uma variável:

    let formatarMensagem = function (textodeEntrada) {
        if (textodeEntrada == undefined)
        return '...';

        let data = new Date();
        let hora = data.getHours();
        let min = data.getMinutes();
        let seg = data.getSeconds();
        let msg_formatada = hora + ':' + min + ':' + seg + ' - ' + textodeEntrada;

        return msg_formatada;
}
*/