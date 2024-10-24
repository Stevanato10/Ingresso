function comprar() {
    let produtoDesejado = document.getElementById('tipo-ingresso').value;
    let produtoDesejadoQuantidade = document.getElementById('qtd').value;
    let quantidadeDispPista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeDispSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeDispInferior =parseInt(document.getElementById('qtd-inferior').textContent);
    
    if (produtoDesejado == 'inferior') {
        if(quantidadeDispInferior >= produtoDesejadoQuantidade){
            quantidadeDispInferior = quantidadeDispInferior - produtoDesejadoQuantidade;
            document.getElementById('qtd-inferior').innerHTML = quantidadeDispInferior;
        }else{
            alert('Não temos a quantidade desejada de ingressos');
        }
    }else if (produtoDesejado == 'superior') {
        if(quantidadeDispSuperior >= produtoDesejadoQuantidade){
            quantidadeDispSuperior = quantidadeDispSuperior - produtoDesejadoQuantidade;
            document.getElementById('qtd-superior').innerHTML = quantidadeDispSuperior;
        }else{
            alert('Não temos a quantidade desejada de ingressos');
        }
    }else{
        if(quantidadeDispPista >= produtoDesejadoQuantidade){
            quantidadeDispPista = quantidadeDispPista - produtoDesejadoQuantidade;
            document.getElementById('qtd-pista').innerHTML = quantidadeDispPista;
        }else{
            alert('Não temos a quantidade desejada de ingressos');
        }
    }
}