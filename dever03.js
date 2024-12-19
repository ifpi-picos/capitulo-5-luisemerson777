let nota1 = Number (prompt("nota1"))
let nota2 = Number (prompt("nota2"))
let nota3 = Number (prompt("nota3"))

let media = (nota1+ nota2 + nota3) / 3

if (media >=7){
    console.log ("aprovado")
}
else if(media <=4){
    console.log ("recuperação")
}
else {
    console.log ("reprovado")
}