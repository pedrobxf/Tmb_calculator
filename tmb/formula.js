function calcularTMB(peso, altura, idade, genero, frequenciaAtividade, percentualGordura) {
    let tmb;
    if (genero.toLowerCase() === "masculino") {
      tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    } else if (genero.toLowerCase() === "feminino") {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    } else {
      return "Gênero não reconhecido. Por favor, insira 'masculino' ou 'feminino'.";
    }
  
    // Fatores de atividade física (de 1 a 5)
    const fatoresAtividade = [1.2, 1.375, 1.55, 1.725, 1.9];
    
    if (frequenciaAtividade >= 1 && frequenciaAtividade <= 5) {
      tmb *= fatoresAtividade[frequenciaAtividade - 1];
    } else {
      return "Frequência de atividade física inválida. Por favor, escolha um valor entre 1 e 5.";
    }
  
    // Ajustar TMB com base no percentual de gordura corporal
    if (percentualGordura >= 0 && percentualGordura <= 100) {
      const fatorGordura = (100 - percentualGordura) / 100;
      tmb *= fatorGordura;
    } else {
      return "Percentual de gordura corporal inválido. Por favor, escolha um valor entre 0 e 100.";
    }
  
    return tmb;
  }
  
  function calcularTMBResultado() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const idade = parseInt(document.getElementById('idade').value);
    const genero = document.getElementById('genero').value;
    const frequenciaAtividade = parseInt(document.getElementById('frequenciaAtividade').value);
    const percentualGordura = parseInt(document.getElementById('percentualGordura').value);
  
    const tmb = calcularTMB(peso, altura, idade, genero, frequenciaAtividade, percentualGordura);
  
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent =`Sua TMB é: ${tmb.toFixed(2)} calorias por dia.`;
  }