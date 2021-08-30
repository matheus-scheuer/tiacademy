  /* 
click - ao clicar em algum elemento HTML
mousemove - ao mover o cursor do mouse acessa (entra) o elemento
mouseover - ao mover o cursos do mouse dentro do elemento
mouseout - ao mover o cursor para fora do elemento
dblclick - ao efetuar do duplo blick (rapido) sobre o elemento
blue - ao perde o foco do elemento, geralmente associado ao elemento HTML Text
*/

window.onload = function(){

    //alert("alerta");

    const btn1 = document.querySelector(".btn-click");
    const legP = document.querySelector(".legenda");
    const cxTexto = document.querySelector("#texto");

    btn1.addEventListener("click", ()=>{  

        //escrever no elemento

        legP.innerHTML += cxTexto.value;

    });

    btn1.addEventListener("click", ()=>{          
       
       legP.innerHTML=" "; 

    });

    const trocaSenha = document.querySelector("#verSenha");
    const cxSenha = document.querySelector("#senha");

    trocaSenha.addEventListener('click', ()=>{
    //getAttribute()
    //setAttribute()

    if(cxSenha.getAttribute("type") == "password"){
        cxSenha.setAttribute("type", "text")
    } else {
        cxSenha.setAttribute("type", "password")
    };

    const cxTrocaBg = document.querySelector("#cxTbg");

        cxTrocaBg.addEventListener("blur", ()=>{
        cxTrocaBg.setAttribute("class","corBg");
    })

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#somar");
    const spResultado = document.querySelector("#resultado");

    btnSomar.addEventListener('click',()=>{

        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number(cx1) + Number(cx2);
          
        spResultado.innerHTML = r;
    });

    //evento modal

    const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
      
    btnModal.addEventListener("click",()=>{

        janelaM.setAttribute("class","modal");

    })

    closeMod.addEventListener('click',()=>{

        janelaM.classList.remove("modal");

    })    
