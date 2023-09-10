

function escreverNoInput(elemento){

    let entrada = document.getElementById("entrada");

    let valor = entrada.value;

    let conta = [];

    for (var i = 0; i < valor.length +1; i++){
        console.log(valor);
        conta.push(entrada[i]);
    }

    let listaOperacao = ['/','*','+','-'];

//     if ( !(listaOperacao.includes(elemento)
//     &&  listaOperacao.includes( conta[ conta.length -1 ] ) ) ) {
        
// }
    entrada.value = entrada.value + elemento;

    // console.log(conta);
    

}

function mostrarResultado(){
    
    let expressao = document.getElementById('entrada').value;

    let entrada = document.getElementById('entrada');

    let resultado = eval(expressao);


    entrada.value = resultado;


}

function apagarExpressao(){

    let entrada = document.getElementById('entrada');

    entrada.value = '';
}



