let valor = Number(prompt("Digite um número."))

for(let x = valor; x <= valor + 2; x++){
    console.log("tabuada do número " + x)
    for(let y = 0; y <= 10; y++ ){
        console.log(x + " X " + y + " = " + (x * y))
    }
}

