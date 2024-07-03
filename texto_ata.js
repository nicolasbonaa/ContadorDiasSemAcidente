let motivoRElement;

function obterDataFormatada() {
    const data = new Date();
    const dataF = [data.getDate(), data.getMonth() + 1, data.getFullYear()];
    const minHoras = [data.getHours(), ':', data.getMinutes()];
    return [dataF.join('/'), minHoras.join('')];
}

function atualizarFonteMotivo(motivoF) {
    const pAtual = document.getElementById('tfBaixo');
    if (pAtual && motivoF.length >= 20) {
        pAtual.style.fontSize = "25px";
    }
}

function exibirMotivo(motivoF, datasFormatadas) {
    const pAtual = document.getElementById('tfBaixo');
    if (pAtual) {
        pAtual.textContent = motivoF.toUpperCase();
    }
    document.getElementById('aData').textContent = datasFormatadas.join(' ');
}

function resetarContador() {
    const zerarDias = document.getElementById('zrDia');
    numeroF = 0;
    numero.textContent = numeroF;
}

function salvarDadosLocalStorage(motivoF, datasFormatadas) {
    localStorage.setItem('contador', 0);
    localStorage.setItem('savedString', motivoF);
    localStorage.setItem('data', datasFormatadas.join(' '));
}

function criarElementoHistorico(motivoF, datasFormatadas) {
    let h2 = document.createElement("h2");
    let h2Conteudo = document.createTextNode(`${motivoF} ${datasFormatadas.join(' ')}`);
    h2.appendChild(h2Conteudo);
    let ch2 = document.getElementById("textoVerso");
    let divPai = ch2.parentNode;
    divPai.insertBefore(h2, ch2);
}

function motivo() {
    const pAtual = document.getElementById("tfBaixo");
    const datasFormatadas = obterDataFormatada();

    let motivoAnterior = pAtual ? pAtual.textContent : '';
    let motivoF = window.prompt('Me dia qual foi o motivo do acidente');
    
    if (motivoF != '') {
        exibirMotivo(motivoF, datasFormatadas);
        atualizarFonteMotivo(motivoF);
        resetarContador();
        salvarDadosLocalStorage(motivoF, datasFormatadas);
        criarElementoHistorico(motivoF, datasFormatadas);
    } else {
        window.alert('A ação foi cancelada pois não foi digitado nada');
        if (pAtual) {
            pAtual.textContent = motivoAnterior;
        }
    }
}

function carregarDadosLocalStorage() {
    var savedString = localStorage.getItem('savedString');
    var dataSalva = localStorage.getItem('data');

    if (savedString) {
        document.getElementById('tfBaixo').textContent = savedString.toUpperCase();
    } else {
        motivo();
    }

    if (dataSalva) {
        document.getElementById('aData').textContent = dataSalva;
    } else {
        motivo();
    }
}

window.onload = carregarDadosLocalStorage;
