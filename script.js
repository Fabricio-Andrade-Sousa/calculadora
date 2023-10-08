

function escreverNoInput(elemento){

    let entrada = document.getElementById("entrada");

    let resultado = entrada.value.split('');

    let listaOperacao = ['/','*','+','-'];


    if ( !(listaOperacao.includes(elemento) && 
    (listaOperacao.includes(resultado[resultado.length - 1]) )) ){

        entrada.value = entrada.value + elemento;
        
    }






    console.log(resultado);
    

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


function apagarUltimoNumero(){

    let entrada = document.getElementById('entrada');
    let expressao = entrada.value;



    let novaEntrada = expressao.split('');
    
    novaEntrada.pop();
    console.log(novaEntrada.length);

    let expressaoConcatenada = '';

    for ( i=0; i < novaEntrada.length; i++){
        
        expressaoConcatenada = expressaoConcatenada + novaEntrada[i];
    }

    entrada.value = expressaoConcatenada;

}
