function calcular(op) {

    let n1 = parseFloat(document.getElementById('n1').value)   
    let n2 = parseFloat(document.getElementById('n2').value)
    let r;

    switch (op) {
        case '+':
            r = n1 + n2
            break;
        case '-':
            r = n1 - n2
            break;
        case '*':
            r = n1 * n2
            break;
        case '/':
            r = n1 / n2
            break;
    }
    document.getElementById('res').value="O Resultado é: "+ r
}

function funcaoEntrada(e1){
    console.log(e1)
}

function funcaoSaida(e1){
    return e1
}

let r = funcaoEntrada(10)
console.log(r)

let r1 =funcaoSaida(20)
console.log(r1)