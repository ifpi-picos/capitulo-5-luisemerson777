let escolher = parseInt(prompt('Escolha uma opção:\n 1 - Converter Celsius para Fahrenheit\n 2 - Converter Fahrenheit para Celsius\n Digite a opção:'))
if(escolher === 1){
    let temperatura = prompt('Digite a temperatura em Celsius: ')
    let resultado = (temperatura * 9) / 5 + 32
    console.log('${temperatura}°C equivale a ${resultado}°F')
} else if(escolher === 2) {
    let temperatura = prompt('Digite a temperatura em Fahrenheit: ')
    let resultado = ((temperatura - 32) * 5) / 9
    console.log('${temperatura}°F equivale a ${resultado}°C')
} else{
    console.log(' digite uma opção válida')
}