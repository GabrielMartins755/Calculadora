// Obtém a referência do ecrã para manipulação
const ecran = document.getElementById('ecran');

/**
 * Adiciona números ou operadores de string ao ecrã
 */
function adicionarAoEcran(valor) {
    ecran.value += valor;
}

/**
 * Limpa o conteúdo do ecrã (Botão C)
 */
function limparEcran() {
    ecran.value = '';
}

/**
 * Executa os cálculos gerais via eval (Soma, Subtração, Multiplicação, Divisão, Exponenciação e Resto)
 */
function calcular() {
    try {
        if (ecran.value) {
            // eval processa nativamente strings como "2+3", "5**2" (exponenciação) e "5%2" (resto)
            ecran.value = eval(ecran.value);
        }
    } catch (error) {
        ecran.value = 'Erro';
    }
}

/**
 * Calcula a Raiz Quadrada do valor atual presente no ecrã
 */
function calcularRaiz() {
    try {
        if (ecran.value) {
            // Primeiro resolve qualquer conta pendente no ecrã
            let valorResolvido = eval(ecran.value);
            // Executa a raiz quadrada usando a biblioteca Math
            ecran.value = Math.sqrt(valorResolvido);
        }
    } catch (error) {
        ecran.value = 'Erro';
    }
}

/**
 * Calcula o Logaritmo de Base 10 do valor atual presente no ecrã
 */
function calcularLog() {
    try {
        if (ecran.value) {
            let valorResolvido = eval(ecran.value);
            // Executa o logaritmo na base 10
            ecran.value = Math.log10(valorResolvido);
        }
    } catch (error) {
        ecran.value = 'Erro';
    }
}