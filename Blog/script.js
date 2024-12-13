/* 
  Imagine que você está desenvolvendo uma aplicação de blog e precisa implementar a funcionalidade de criação de posts. Para isso, você utilizará a API JSONPlaceholder para enviar os dados do título e do conteúdo do post, e ela responderá simulando o comportamento de um backend real.

  (https://jsonplaceholder.typicode.com/posts)

  Você criará:

  Um formulário onde os usuários podem digitar o título e o conteúdo do post.
  Um botão que, ao ser clicado, enviará esses dados para a API via POST.
  Um feedback na página mostrando o ID do post gerado, o título e o conteúdo enviados.

  Contexto Real do Uso
  Essa prática é uma preparação para cenários reais, como:

  Desenvolver aplicações que consomem APIs RESTful para funcionalidades de frontend.
  Entender como enviar dados de forma assíncrona para servidores e processar respostas.
  Trabalhar com estruturas JSON para integrar frontends e backends.
*/

$("#enviar").on("click", function(event) {
    event.preventDefault();


    let titulo = $('#titulo').val();
    let conteudo = $('#conteudo').val(); 

    let dados = {
        title: titulo,
        body: conteudo 
    };

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function (resposta) {
            $("#resposta").text(JSON.stringify(resposta, null, 2)); 
        },
        error: function (erro) {
            $("#resposta").text(`ERRO: ${erro.statusText}`); 
        },
    });
});


