function somaValor() {
    // Pega os valores dos inputs
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Converte os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Verifica se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        // Realiza a soma
        let soma = num1 + num2;

        // Exibe o resultado
        document.getElementById("resultado").innerHTML = `O resultado da soma entre ${num1} e ${num2} é ${soma}.`;
    }
}

