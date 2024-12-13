$('#obterDicas').on('click', function() {
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: "GET",
        dataType: "json",  
        success: function(resposta) {
            const dica = resposta.slip.advice; 
            $('#mensagem').text(dica);  
        },
        error: function(erro) {
            console.error("Erro: ", erro);  
        }
    });
});
