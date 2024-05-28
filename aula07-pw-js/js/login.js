function autenticar(){
    let email = document.getElementById('inp_email').value
    let senha = document.getElementById('inp_senha').value

    console.log(email, senha)

    if (email==''){
        alert('Email está vazio')
    }else if(senha==''){
        alert ('Senha esta vazia')
    }else {
        alert ('Voce foi autenticado')
    }

}