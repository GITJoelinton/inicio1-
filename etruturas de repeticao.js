{
    let numero =prompt ("digite um numero para ver a tabuada:");
    numero = parseInt (numero);
    let i=1;
    while (i<=10){
    let resultado = numero * i;
    console.log (numero + " x " + i + " = " + resultado);
    i++;
    }
    console.log ("tabuada do " + numero + " finalizada!");
    
}