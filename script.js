const fases = [
  {
    pergunta: "Se você me ama, então você sorri ao lembrar de mim. Seoje você sorriu. O que podemos concluir?",
    opcoes: [
      "Você me ama",
      "Você não me ama",
      "Nada pode ser concluído",
      "Você está com fome :3"
    ],
    correta: 0,
    curiosidade: "Nós queriamos tanto ter fotos juntos, hoje temos várias, essa é a nossa história."
  },
    {
    pergunta: "Se toda vez que penso em você meu coração aperta, e hoje o coração apertou, o que isso me diz?",
    opcoes: [
        "Você está aqui comigo :)",
        "Nada se conclui com certeza",
        "Foi só ansiedade",
        "Eu senti saudade de você"
    ],
    correta: 3,
    curiosidade: "Mesmo de longe, você consegue bagunçar meu coração do jeito mais bonito que existe."
    },
    {
    pergunta: "Se te envio bom dia todos os dias, então penso em você de manhã. Hoje te mandei um bom dia, então:",
    opcoes: [
        "Pensei em você",
        "Era só automático :|",
        "Foi um bug no WhatsApp",
        "Não dá pra saber"
    ],
    correta: 0,
    curiosidade: "Mesmo com a correria aqui em Curitiba, você continua sendo meu primeiro pensamento do dia."
    },
    {
    pergunta: "Se amar é confiar mesmo de longe, e eu confio em nós, o que isso revela?",
    opcoes: [
        "Tem lógica nesse amor",
        "Estamos ficando distantes ;-;",
        "Isso é só matemática emocional",
        "Nada a ver, distância é ausência"
    ],
    correta: 0,
    curiosidade: "A lógica talvez não explique tudo, mas meu sentimento por você é constante e verdadeiro em qualquer lugar do mundo."
    },
    {
    pergunta: "Se toda nossas chamadas de vídeo acabam com um sorriso meu, e fizemos uma chamada, o que acontece no final?",
    opcoes: [
        "A internet cai",
        "Você me faz sorrir de novo",
        "A gente ficou triste",
        "Você me odeia ;-;"
    ],
    correta: 1,
    curiosidade: "Mesmo em 144p, seu rosto me deixa em 4K no meu interior"
    },
    {
    pergunta: "Se quando estou em Bombinhas sou mais feliz, e agora não estou lá, então:",
    opcoes: [
        "Estou 100% feliz ainda ²-²",
        "Felicidade está suspensa até nova ordem",
        "Felicidade incompleta: só falta você",
        "Conclusão inválida, tá nublado"
    ],
    correta: 2,
    curiosidade: "Você é a parte do meu litoral que falta em Curitiba e mesmo longe me ensina que amar é também esperar e lutar."
    },
    {
    pergunta: "Se nossas conversas sem sentido sempre me fazem rir, e hoje ri de novo, o que pode ser concluído?",
    opcoes: [
        "Você é uma palhaça .-.",
        "Rir foi coincidência",
        "Você me ama só de sacanagem",
        "Você me entende até sem lógica"
    ],
    correta: 3,
    curiosidade: "Nem toda lógica é matemática: tem conexão que só o coração resolve."
    },
    {
    pergunta: "Se a cada pensamento meu em você nasce um beijo virtual, e hoje pensei mil vezes... o que acontece?",
    opcoes: [
        "Mil beijos enviados via 5G",
        "Minha mente virou modem :(",
        "A lógica travou de tanto amor",
        "Nada: pensamento não manda beijo"
    ],
    correta: 0,
    curiosidade: "Pode não ser físico ainda, mas meu pensamento é seu, beijo por beijo, até o dia que virará real."
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
    resultado.classList.remove("oculto");
    proximo.classList.remove("oculto");
  } else {
    const respostaCorreta = fase.opcoes[fase.correta];
    resultado.innerHTML = `
      <p><strong>Oops! Não é bem isso.</strong></p>
      <p>A resposta certa é: <strong>"${respostaCorreta}"</strong></p>
      <p>Vamos recomeçar, eu te amo!</p>
    `;
    resultado.classList.remove("oculto");

    // Voltar ao início após 2 segundos
    setTimeout(() => {
      faseAtual = 0;
      carregarFase();
    }, 2000); // 2 segundos
  }

  // Desativa opções após clique
  document.querySelectorAll('.opcao').forEach(btn => btn.onclick = null);
}


function proximaFase() {
  faseAtual++;
  if (faseAtual < fases.length) {
    carregarFase();
  } else {
    const container = document.getElementById("fase-container");
    const resultado = document.getElementById("resultado");
    const proximo = document.getElementById("proxima-fase");

    container.innerHTML = `
      <h2>Você completou todas as fases!</h2>
      <p>Agora você desbloqueou meu coração inteiro</p>
      <div class="declaracao-final">
        <p><strong>Declaração lógica:</strong></p>
        <p>
          Se amar é confiar + rir + aprender juntos,<br>
          E se (nós fazemos tudo isso ∧ vencemos a distância),<br>
          Então o que sentimos é <strong>amor verdadeiro.</strong><br><br>

          ∴ Laís ∈ {meus pensamentos, meus planos, meu futuro}<br>
          E Samuel ⊆ seu coração (por tempo ≥ infinito).<br><br>

          Logo, não há contradição: Eu te amo
        </p>
      </div>
    `;

    resultado.classList.add("oculto");
    proximo.classList.add("oculto");
  }
}


window.onload = carregarFase;
