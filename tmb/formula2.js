function calcularDieta() {
    const tmb = parseFloat(document.getElementById('tmb').value);
    const objetivo = document.getElementById('objetivo').value;
    
    let caloriasDiarias;
  
    // Determinar a quantidade de calorias diárias com base no objetivo selecionado
    switch (objetivo) {
      case 'emagrecer':
        caloriasDiarias = tmb - 500; // Reduzir 500 calorias para perder peso
        break;
      case 'ganhar_massa':
        caloriasDiarias = tmb + 500; // Aumentar 500 calorias para ganhar massa muscular
        break;
      case 'manter_peso':
        caloriasDiarias = tmb; // Manter a mesma quantidade de calorias para manter o peso
        break;
      default:
        alert('Selecione um objetivo válido.');
        return;
    }

var carbo= 0.45*caloriasDiarias/4;
var prot= 0.35*caloriasDiarias/4;
var gord= 0.2*caloriasDiarias/9;
  
    // Exibir o resultado para o usuário
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Você deve ingerir aproximadamente ${caloriasDiarias} calorias, ${carbo}g de carboidratos, ${prot}g de proteinas e ${gord}g de gordura por dia para ${objetivo}.`;
  }

  const alimentos = {
    "Arroz": [1.28, 0.29, 0.02, 0],
    "Feijão": [0.76, 0.23, 0.01, 0.05],
    "Carne": [2.19, 0, 0.28, 0.07],
    "Ovo": [1.6, 0.02, 0.12, 0.1],
    "Batata": [0.86, 0.18, 0.01, 0],
    "Frango": [1.63, 0, 0.31, 0.03],
    "Banana": [0.89, 0.22, 0.01, 0],
    "Leite": [0.55, 0.06, 0.03, 0.02],
    "Maçã": [0.5, 0.15, 0, 0],
    "Pão": [2.7, 0.6, 0.07, 0]
  };

  function preencherTabela() {
    const tabela = document.getElementById("tabelaDieta");
    const linhas = tabela.getElementsByTagName("tr");

    
  let totalCalorias = 0;
  let totalCarboidratos = 0;
  let totalProteinas = 0;
  let totalGorduras = 0;
  
    for (let i = 1; i < linhas.length - 1; i++) {
      const nomeAlimento = linhas[i].cells[0].innerHTML;
      const gramas = parseFloat(linhas[i].cells[1].getElementsByTagName("input")[0].value);
  
      if (alimentos.hasOwnProperty(nomeAlimento) && !isNaN(gramas)) {
        const infoNutricional = alimentos[nomeAlimento];
        linhas[i].cells[2].innerHTML = (gramas * infoNutricional[0]).toFixed(2);
        linhas[i].cells[3].innerHTML = (gramas * infoNutricional[1]).toFixed(2);
        linhas[i].cells[4].innerHTML = (gramas * infoNutricional[2]).toFixed(2);
        linhas[i].cells[5].innerHTML = (gramas * infoNutricional[3]).toFixed(2);

        totalCalorias += gramas * infoNutricional[0];
        totalCarboidratos += gramas * infoNutricional[1];
        totalProteinas += gramas * infoNutricional[2];
        totalGorduras += gramas * infoNutricional[3];
      }
    }
      // Preenchendo a linha de total
  const totalRow = linhas[linhas.length - 1];
  totalRow.cells[2].innerHTML = totalCalorias.toFixed(2);
  totalRow.cells[3].innerHTML = totalCarboidratos.toFixed(2);
  totalRow.cells[4].innerHTML = totalProteinas.toFixed(2);
  totalRow.cells[5].innerHTML = totalGorduras.toFixed(2);
  }
  
