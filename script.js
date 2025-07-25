const fases = [
  {
    pergunta: "Se você me ama, então você sorri ao me ver. Hoje você sorriu. O que podemos concluir?",
    opcoes: [
      "Você me ama",
      "Você não me ama",
      "Nada pode ser concluído",
      "Você está com fome"
    ],
    correta: 0,
    curiosidade: "🥰 Sabia que eu sempre reparo no seu sorriso? Ele é meu favorito."
  },
  {
    pergunta: "Todo abraço seu é mágico. Ontem eu recebi um abraço. O que isso significa?",
    opcoes: [
      "Era um abraço mágico",
      "Você me ama",
      "Nada a concluir",
      "Você é mágica"
    ],
    correta: 0,
    curiosidade: "🤗 Seu abraço muda meu dia inteiro. Juro!"
  },
  {
    pergunta: "Se hoje é terça, então eu te mando mensagem. Hoje não te mandei mensagem. Logo...",
    opcoes: [
      "Hoje é terça",
      "Hoje não é terça",
      "Você está brava",
      "Eu te esqueci"
    ],
    correta: 1,
    curiosidade: "📆 Uma vez eu errei o dia só pra ter desculpa de te ver a mais 😅"
  }
];

let faseAtual = 0;

function carregarFase() {
  const fase = fases[faseAtual];
  const container = document.getElementById("fase-container");
  const resultado = document.getElementById("resultado");
  const proximo = document.getElementById("proxima-fase");

  resultado.classList.add("oculto");
  proximo.classList.add("oculto");

  container.innerHTML = `
    <h2>Fase ${faseAtual + 1}</h2>
    <p>${fase.pergunta}</p>
    ${fase.opcoes.map((opcao, i) =>
      `<div class="opcao" onclick="verificar(${i})">${opcao}</div>`
    ).join('')}
  `;
}

function verificar(escolha) {
  const fase = fases[faseAtual];
  const resultado = document.getElementById("resultado");
  const proximo = document.getElementById("proxima-fase");

  if (escolha === fase.correta) {
    resultado.innerHTML = `<p><strong>Acertou!</strong></p><p>${fase.curiosidade}</p>`;
  } else {
    resultado.innerHTML = `<p><strong>Oops! Não é bem isso.</strong> Mas eu ainda te amo! ❤️</p>`;
  }

  resultado.classList.remove("oculto");
  proximo.classList.remove("oculto");

  // Desativa opções após resposta
  document.querySelectorAll('.opcao').forEach(btn => btn.onclick = null);
}

function proximaFase() {
  faseAtual++;
  if (faseAtual < fases.length) {
    carregarFase();
  } else {
    document.getElementById("fase-container").innerHTML = "<h2>🎉 Você completou todas as fases!</h2><p>Agora você desbloqueou meu coração inteiro 💖</p>";
    document.getElementById("resultado").classList.add("oculto");
    document.getElementById("proxima-fase").classList.add("oculto");
  }
}

window.onload = carregarFase;
