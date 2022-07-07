const [usuario, senha] = document.querySelectorAll("input");
const botaoSeta = document.querySelector(".arrow-button");

usuario.addEventListener("input", verificar);
senha.addEventListener("input", verificar);

function verificar(){
    if(usuario.value && senha.value.length>=8){
        botaoSeta.classList.add("ativarCor");
        console.log(botaoSeta);
    }else{
        botaoSeta.classList.remove("ativarCor");
    }
}



