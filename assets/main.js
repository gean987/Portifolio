const campoNome = document.querySelector("#nome")
const campoEmail = document.querySelector('#email')
const form = document.querySelector('.contato__formulario')

campoNome.addEventListener("blur", () => {

     verificaCampo(nome)
}
)

campoEmail.addEventListener("blur", ()=> {
    
    verificaCampo(email)
    
}
)

campoNome.addEventListener("invalid", evento => evento.preventDefault())

campoEmail.addEventListener("invalid", evento => evento.preventDefault())

form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const dados = {
            "nome": evento.target.elements["nome"].value,
            "email": evento.target.elements["email"].value,
            "mensagem": evento.target.elements["texto"].value
        }
            sessionStorage.setItem("contato", JSON.stringify(dados));

            window.alert("instrucao recebida, entrarei em contato assim que possivel");

            form.reset();
})

 
const mensagens = {
    nome: {
        valueMissing: "campo de preenchimento obrigatório",
        patternMismatch:"Preencha um nome válido",
        typeMismatch:"Preencha um nome válido",
        tooShort:"Preencha um nome válido"
    },

    email: {
        valueMissing:"campo de preenchimento obrigatório",
        typeMismatch:"Preencha um email válido",
        tooShort:"Preencha um email válido"
    }
}

const erros = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "tooShort"
]


function verificaCampo(campo){
    let mensagem = "";

        erros.forEach( erro => {

            if(campo.validity[erro]){
                mensagem = mensagens [campo.id] [erro];
            }
        }

        )

        const campoErro = campo.parentNode.querySelector('.msg__erro'); 
        const validacao = campo.checkValidity();

            if(!validacao){
                
                 campoErro.innerHTML = `<img src="./assets/Imagens/aviso.png" alt="alerta"> ${campoErro.textContent = mensagem}`, campoErro.style.display = "flex";
            }
            else {
                campoErro.style.display = "none";
            }
}