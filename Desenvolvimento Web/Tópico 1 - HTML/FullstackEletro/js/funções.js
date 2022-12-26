function exibir_categoria(categoria) {
   // alert(categoria);

   let elementos = document.getElementById('tabproduto');
   console.log(elementos);
}

let destaque = (imagem) => {
    console.log(imagem);
    if (imagem.width == 240) {
        imagem.width = 120;
    } else {
        imagem.width = 240;
    }
}