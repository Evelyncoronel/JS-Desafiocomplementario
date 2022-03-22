for (let i = 1; i <= 100; i++) {
    let NumeroPar = parseInt(prompt("Ingresar un Numero"));
    let resultado = NumeroPar % 2 ;
    if  (resultado == 0) {
        alert(NumeroPar + " es un numero par");
    }else {
        alert(NumeroPar + " es un numero impar"); 
    }
}
console.log (resultado)



