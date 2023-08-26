let nome = prompt("Digite o seu nome.")
let idade = Number(prompt("Digite a sua idade."))
let carteiraMotorista = prompt("Você possui carteira de motorista?")
let carro = prompt("Você tem carro?")

if (idade < 18 || carteiraMotorista === "não"){
    console.log("Você não pode dirigir! "+ nome)
}else if(idade >= 18 && carteiraMotorista === "sim" && carro === "não"){
    console.log(nome + " , você pode dirigir mas não tem carro.")
}else if (idade >= 18 && carteiraMotorista === "sim" && carro === "sim"){
    console.log(nome + " você será um motorista!")
}

