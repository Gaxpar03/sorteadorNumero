function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeroSorteado = [];
    let sorteio;
    let diferenca = Math.abs(ate - de) + 1;
    if (quantidade > diferenca){
        alert('Você digitou uma quantidade de número a ser sorteado superior ao número a ser dgitado. Por gentileza, digite novamente')
        document.getElementById('quantidade').value = '';
    }else{
        for (let i = 0; i < quantidade; i++){
            sorteio = obterNumeroAleatorio(de, ate);
            while (numeroSorteado.includes(sorteio)){
                sorteio = obterNumeroAleatorio(de, ate);
            }
            numeroSorteado.push(sorteio);
        }
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteado}</label>`;
        alterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}