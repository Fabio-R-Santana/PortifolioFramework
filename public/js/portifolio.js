function validacao(){
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("descricao").value
    const rejex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(nome == ""){
        alert("Preencha seu nome corretamente");
            return false;
        }if(email == "" || !rejex.teste(email)){
            alert("Preencha seu email corretamente");
            return false;
        }if(mensasgem == ""){
            alert("Preencha a mensagem corretamente");
            return false;
        }
    return true;
}

function construirProjetos(){
    const jasonPortifolio = `[
        {
        "projetoNome":"MONTASK",
        "projetoIMG": "${basePath}/IMGmontask.jpeg",
        "projetoDesc": "O projeto se trata de um site desenvolvidop por 4 pessoas, para organizar tarefas do dia a dia escolar",
        "projetoLink": "https://github.com/dashboard"
        },
        {
        "projetoNome":"ARDUINO",
        "projetoIMG": "${basePath}/arduino.jpeg",
        "projetoDesc": "Carrinho robô feito com arduino, progeto idealizado nas dependencias do Senac e no curso Programação para Robótica",
        "projetoLink": "https://linkFake.com/arduino    "
        }
        ]`;
        let objetoProjetos = JSON.parse(jasonPortifolio);
        //cria o template original para ser copiado abaixo
        const template = document.getElementById('caixaTemplate');
        // Adiciona o objeto ao container de objetos
        const container = document.getElementById('objtContainer');
        //forech para fazer o loop que passara pelo json
        objetoProjetos.forEach(projeto =>{
        // Clona o template
        const objetoClone = document.importNode(template.content, true);

        // Preenche os dados do objeto
        objetoClone.querySelector('.objetoNome').textContent = projeto.projetoNome;
        objetoClone.querySelector('.objetoDesc').textContent = projeto.projetoDesc;
        objetoClone.querySelector('.objetoLink').textContent = projeto.projetoLink;
        objetoClone.querySelector('.objetoLink').href = projeto.projetoLink;
        objetoClone.querySelector('#objetoImagem').src = projeto.projetoIMG;
        container.appendChild(objetoClone);
        })//termina o forEach
        
}
document.addEventListener('DOMContentLoaded', function() {
    construirProjetos();
});