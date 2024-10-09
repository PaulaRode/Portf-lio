const LIMITE_MAXIMO = 30;

// Função para calcular a sequência de Fibonacci
function calcTermo(n) {
    let sequencia = [0, 1];
    if (n === 1) return [0];  // Caso o usuário insira '1', retorna só o primeiro termo
    for (let i = 2; i < n; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
    return sequencia;
}

function calcularFibonacci() {
    const num = parseInt(document.getElementById('termo').value);  // Alterado para "termo"

    if (isNaN(num) || num <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira um número válido.";
        return;
    }

    if (num > LIMITE_MAXIMO) {
        document.getElementById('resultado').textContent =
            `O número máximo permitido de termos é ${LIMITE_MAXIMO}. Por favor, insira um valor menor.`;
        return;
    }

    const resultado = calcTermo(num);

    document.getElementById('resultado').textContent =
        `Sequência de Fibonacci com ${num} termos: ${resultado.join(', ')}`;
    
    // Limpa o campo de entrada após o cálculo
    document.getElementById('termo').value = "";
}
