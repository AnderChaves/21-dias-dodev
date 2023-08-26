// == igual | != diferente | < menor que e > maior que | <= menor ou igual => maior ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo
// && e | || ou

let fome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")

if (fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa!!!")
}else if (fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Peça um delivery!!")
}else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje você vai jantar no seu reustaurante favorito!!!")
}
