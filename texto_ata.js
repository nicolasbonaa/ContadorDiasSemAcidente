let motivoRElement; 
window.prompt('TESTE')
function motivo() {
    const pAtual = document.getElementById("tfBaixo");
    //Variaveis de DATA
    const dataAtual = document.getElementById('aData')
    const data = new Date()
    const dataF = [data.getDate(),data.getMonth() + 1,data.getFullYear()]
    const minHoras = [data.getHours(), ':', data.getMinutes()]
    const datasFormatadas = [dataF.join('/'), minHoras.join('')] 
    //Variaveis do prompt
    let motivoAnterior = pAtual ? pAtual.textContent : '';
    let motivoF = window.prompt('Me dia qual foi o motivo do acidente');

    if (pAtual) {
        pAtual.textContent = motivoF.toUpperCase();
        if(motivoF.length >= 20){
            document.getElementById('tfBaixo').style.fontSize="25px";
        }
    }
    if (motivoF != ''){
    const zerarDias = document.getElementById('zrDia');
        numeroF = 0;
        numero.textContent = numeroF;
        dataAtual.textContent = datasFormatadas.join(' ')
    }else{
        window.alert('A ação foi cancelada pois não foi digitado nada')
        if(pAtual){
        pAtual.textContent = motivoAnterior;
        }
    } 
        localStorage.setItem('contador', numeroF);
        localStorage.setItem('savedString', motivoF);
        localStorage.setItem('data', datasFormatadas.join(' '))
    
    let h2 = document.createElement("h2")
    let h2Conteudo = document.createElement(motivoF)
    h2.appendChild(h2Conteudo)
    let ch2 = document.getElementById("textoVerso")
    let divPai = ch2.parentNode;
    divPai.insertBefore(h2, ch2)
        
}
function carregaDadosLocalStorage() {
    var savedString = localStorage.getItem('savedString');
    var dataSalva = localStorage.getItem('data');

    const pAtual = document.getElementById('tfBaixo');
    const dataAtual = document.getElementById('aData');

    if (savedString && pAtual) {
        pAtual.textContent = savedString.toUpperCase();
    } else {
        motivo();
    }

    if (dataSalva && dataAtual) {
        dataAtual.textContent = dataSalva;
    } else {
        motivo();
    }
}

window.onload = carregaDadosLocalStorage;

