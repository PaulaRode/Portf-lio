// function calcularIMC(peso, altura) {
//     return peso / (altura ** 2);
// }

// if  (imc < 18.5){
//     return "Abaixo do peso";

// } else if (imc < 24.9) {
//     return "Peso normal";
// } else if (imc < 29.9) {
//     return "Sobrepeso";
// } else {
//     return "Obesidade";
// }
// const nome = "João";
// const peso = 70;
// const altura = 1.75;

// const imc = calcularIMC(peso, altura);
// console.log(" O IMC de ${nome} é $(imc.toFixed(2)} - ${classificarIMC(imc)}");

// Função que calcula o IMC

// function calcularIMC(peso, altura) {
//     return peso / (altura ** 2);
// }

// // Função que classifica o IMC
// function classificarIMC(imc) {
//     if (imc < 18.5) {
//         return "Abaixo do peso";
//     } else if (imc < 24.9) {
//         return "Peso normal";
//     } else if (imc < 29.9) {
//         return "Sobrepeso";
//     } else {
//         return "Obesidade";
//     }
// }

// // Exemplo de uso
// const nome = "João";
// const peso = 98; // em kg
// const altura = 1.60; // em metros

// const imc = calcularIMC(peso, altura);
// console.log(`O IMC de ${nome} é ${imc.toFixed(2)} - ${classificarIMC(imc)}`);

const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value != '' && peso.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'Abaixo do peso'

        } else if (imc < 25) {
            classification = 'Peso normal'

        } else if (imc < 30) {
            classification = 'Acima do peso'

        } else if (imc < 35) {
            classification = 'Obesidade Grau I'

        } else if (imc < 41) {
            classification = 'Obesidade Grau II'

        } else {
            classification = 'Obesidade Grau III'
        }
        resultado.innerHTML = `IMC: ${imc} (${classification})`;

    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}






