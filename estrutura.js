const Pilha = () => {
    let dados = [];
    empilhar = (valor) => {
        dados.push(valor);
        imprimir();
    };
    desempilhar = () =>{
        let retirado = null;
        if (altura() > 0){
            dados.splice(altura()-1,1);
            imprimir();
        }
    };
    altura = () => dados.length;
    imprimir = () => {
        document.getElementById("dados_pilha").innerHTML = dados;
    }
    return {
        empilhar,
        desempilhar,
        altura,
        imprimir
    }
}

let pilha = Pilha();

document.querySelector("#btnEmpilhar").onclick = function(){
    pilha.empilhar(document.querySelector("#valor").value);
    document.querySelector("#valor").value = "";
    document.querySelector("#valor").focus();
};