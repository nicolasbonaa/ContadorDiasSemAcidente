document.querySelectorAll('.viraCartao').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('flip');
    });
});
let numero = document.getElementById('contador');
let numeroF = Number(numero.textContent);
document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializar o contador quando a página carregar


    // Carregar o valor do contador do armazenamento local, se disponível
    const savedCounter = localStorage.getItem('contador');
    if (savedCounter !== null) {
        numeroF = Number(savedCounter);
        numero.textContent = numeroF;
    }

    // Botão para adicionar um dia
    const incrementaButton = document.getElementById('addDia');
    incrementaButton.addEventListener('click', () => {
        numeroF += 1;
        numero.textContent = numeroF;

        // Atualizar o armazenamento local para manter o valor do contador
        localStorage.setItem('contador', numeroF);
    });

    // Botão para remover um dia
    const decrementaButton = document.getElementById('rmvDia');
    decrementaButton.addEventListener('click', () => {
        if (numeroF > 0) { // Garantir que o contador não seja negativo
            numeroF -= 1;
            numero.textContent = numeroF;

            // Atualizar o armazenamento local para manter o valor do contador
            localStorage.setItem('contador', numeroF);
        }
    });
});

function dataGet(){
        const temp = localStorage.getItem("valor") || valor
    }


let motivoRElement; // Variável para armazenar a referência ao elemento <p>

function motivo() {
    const motivo = window.prompt('Me dia qual foi o motivo do acidente');
    const pAtual = document.getElementById("tfBaixo");

    if (pAtual) {
        pAtual.textContent = motivo.toUpperCase();
        if(motivo.length >= 20){
            document.getElementById('tfBaixo').style.fontSize="25px";
        }
    }
    const zerarDias = document.getElementById('zrDia');
        numeroF = 0;
        numero.textContent = numeroF;
        
        localStorage.setItem('contador', numeroF);
}