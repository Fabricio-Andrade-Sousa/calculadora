

function escreverNoInput(elemento){

    let entrada = document.getElementById("entrada");

    let resultado = entrada.value.split('');

    let listaOperacao = ['/','*','+','-'];


    if ( !(listaOperacao.includes(elemento) && (listaOperacao.includes(resultado[resultado.length - 1]))) ){

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



