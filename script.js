const visor = document.getElementById('visor');

function adicionarAoVisor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
        if (visor.value) {
            visor.value = eval(visor.value);
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}

function calcularRaiz() {
    try {
        if (visor.value) {
            let valorResolvido = eval(visor.value);
            visor.value = Math.sqrt(valorResolvido);
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}

function calcularLog() {
    try {
        if (visor.value) {
            let valorResolvido = eval(visor.value);
            visor.value = Math.log10(valorResolvido);
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}

// Leitura nativa do Teclado do Computador
document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    if (/[0-9\.\+\-\*\/%]/.test(tecla)) {
        adicionarAoVisor(tecla);
    } else if (tecla === 'Enter') {
        event.preventDefault();
        calcular();
    } else if (tecla === 'Backspace') {
        apagarUltimo();
    } else if (tecla === 'Delete' || tecla === 'Escape') {
        limparVisor();
    }
});