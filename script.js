document.querySelectorAll('.viraCartao').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('flip');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializar o contador quando a página carregar
    let numero = document.getElementById('contador');
    let numeroF = Number(numero.textContent);

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

    const zerarDias = document.getElementById('zrDia');
    zerarDias.addEventListener('click', () => {
        numeroF = 0;
        numero.textContent = numeroF;
        
        localStorage.setItem('contador', numeroF);
    })
});