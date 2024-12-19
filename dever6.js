function verificarmultiplo(){
let numero1 = parseInt (prompt("digite o numero"))
let numero2 = parseInt (prompt("digite o numero"))

if(numero1 % numero2 ===0  /  numero2 % numero1 === 0) {
alert("pelo menos 1 numero e multiplo do outro")
}
else{
    alert("nemnhum dos numeros e multiplo do outro")
}
}
verificarmultiplo()
