function avaliaParidade(limiteSuperior) {
    for (let i=0; i<limiteSuperior; i++){
        if(i%2==1)
            console.log(i+": é um número Impar")
        else
            console.log(i+": é um número Par")
    }
}

avaliaParidade(10);