let notas = [
  [7.5, 8.0, 4.7],
  [9.0, 7.3, 8, 5],
  [10.0, 8.7, 3.2],
  [8.0, 6.7, 5.2],
];

// Calcular as meédias de cada aluno
let medias = [];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  let soma = 0;
  for (let j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
  }

  let media = soma / notas[i].length;
  medias.push(media);
  somaNotas += media;
}

// Calcula media geral
let mediaGeral = somaNotas / medias.length;

// Saber quem atingiu a média
let alunos = [];
for (let i = 0; i < medias.length; i++) {
  // Varificar medias[i] > mediaGeral
  if (medias[i] > mediaGeral) {
    // add no alunos, esse i
    alunos.push(i + 1)
  }
}

console.log(`Media dos alunos ${medias.map(m => m.toFixed(2))}`);
console.log(`Media Geral ${mediaGeral.toFixed(2)}`);
console.log(`Alunos que passaram ${alunos}`);
