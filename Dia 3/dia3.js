//var let const

let nomeUsuario = prompt('Digite o seu nome.')
let idadeUsuario = Number(prompt('Digite a sua idade.'));
let alturaUsuario = Number(prompt('Digite a sua altua.'));
let pesoUsuario = Number(prompt('Digite o seu peso.'));
let anoNascimento = 2023 - idadeUsuario;
let imcUsuario = pesoUsuario/(alturaUsuario*alturaUsuario);
console.log ("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, nasceu em " + anoNascimento + ", tem " + alturaUsuario + " de altura, pesa " + pesoUsuario+ " kg seu IMC é " + imcUsuario + "Kg/m2");








