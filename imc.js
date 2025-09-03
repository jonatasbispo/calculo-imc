function calcularIMC() {
    // Pega os valores dos campos de input usando os IDs corretos do HTML
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Pega o gênero selecionado
    const genero = document.querySelector('input[name="genero"]:checked');

    // Valida se os valores são válidos e se o gênero foi selecionado
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || !genero) {
        alert("Por favor, preencha todos os campos e selecione seu gênero.");
        return;
    }

    // Calcula o IMC (a altura geralmente é em metros no cálculo)
    const imc = peso / (altura * altura);

    // Encontra o elemento onde o resultado será exibido
    const resultadoElement = document.getElementById('resultado');

    let classificacao = '';

    // Determina a classificação do IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }

    // Atualiza o HTML com o resultado e a classificação
    resultadoElement.innerHTML = `
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
        <p>Gênero: <strong>${genero.value.charAt(0).toUpperCase() + genero.value.slice(1)}</strong></p>
    `;

    // Torna o elemento de resultado visível
    resultadoElement.style.display = 'block';
}