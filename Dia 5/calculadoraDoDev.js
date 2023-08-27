//Coletando as variáveis

let numUm = Number(prompt("Digite um número!"))
let numDois = Number(prompt("Digite outro número!"))

//Operações matemáticas

let sum = numUm + numDois
let div = numUm / numDois
let mult = numUm * numDois
let sub = numUm - numDois

let operacao = prompt("soma, divisão, subtração ou multiplicação?")

switch (operacao){
    case "soma":
        console.log("soma")    
        console.log(sum)
        break;
    case "divisão":
        console.log("Divisão")
        console.log(div)
        break;
    case "subtração":
        console.log("Subtração")
        console.log(sub)
        break;
    case "multiplicação":
        console.log("Multiplicação")
        console.log(mult)
        break;
    default:
        console.log("Opção inválida.")
        break;


}

