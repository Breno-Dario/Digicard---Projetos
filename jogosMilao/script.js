let pergunta_1 = {
    pergunta: "Qual é a linguagem usada para estilização da página Web?",
    opcoes: ["HTML", "CSS", "Javascript", "Python"],
    resposta: "CSS",
  };
  
  let pergunta_2 = {
    pergunta: "Qual é a linguagem usada para manipular o DOM?",
    opcoes: ["Javascript", "CSS", "HTML", "Python"],
    resposta: "Javascript",
  };
  
  let perguntas = [pergunta_1, pergunta_2];
  
  const quizArea = document.querySelector("#quiz");
  const resultArea = document.querySelector("#result");
  
  let indiceAtual = 0;
  let pontuacaoTotal = 0;
  
  function exibirPergunta() {
    quizArea.innerHTML = "";
  
    if (indiceAtual >= perguntas.length) {
      return exibirResultado();
    }
  
    let perguntaAtual = perguntas[indiceAtual];
  
    let perguntaDiv = document.createElement("div");
    perguntaDiv.innerHTML = perguntaAtual.pergunta;
  
    quizArea.appendChild(perguntaDiv);
  
    // Criar opções
    let opcoesDiv = document.createElement("div");
    perguntaAtual.opcoes.forEach((opcao) => {
      let botaoOpcao = document.createElement("button");
      botaoOpcao.innerHTML = opcao;
      botaoOpcao.onclick = () => verificarResposta(opcao);
      opcoesDiv.appendChild(botaoOpcao);
    });
  
    quizArea.appendChild(opcoesDiv);
  }
  
  function exibirResultado() {
    quizArea.innerHTML = "";
    resultArea.innerHTML = `Você acertou ${pontuacaoTotal} de ${perguntas.length} perguntas`;
  }
  
  function verificarResposta(respostaEscolhida) {
    let perguntaAtual = perguntas[indiceAtual];
  
    if (respostaEscolhida === perguntaAtual.resposta) {
      pontuacaoTotal++;
    }
  
    indiceAtual++;
    exibirPergunta();
  }
  
  exibirPergunta();
  