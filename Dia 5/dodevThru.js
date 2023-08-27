//variáveis
let opcao = prompt("Escolha uma opcao: gasolina, álcool ou calibrar.")
let valor = Number(prompt("Quanto você quer gastar?"))



switch(opcao){
    case "gasolina":
        console.log("Você optou por abastecer com Gasolina!")
        console.log(valor / 5 + " Litros")
        break;
    case "álcool":
        console.log("Você optou por abastecer com Álcool!")
        console.log(valor / 3 + " Litros")
        break;
    case "calibrar":
        console.log("Você optou por calibrar dessa vez.")
        console.log("Pneus Calibrados!")
        break;
    default:
        console.log("Opção inválida!")

}