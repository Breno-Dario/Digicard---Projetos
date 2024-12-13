// https://api.openweathermap.org/data/2.5/weather?lat=-23.5505&lon=-46.6333&appid=a9ba5a5f153a114b113b90b2165a8753&units=metric&lang=pt_br

$("#buscarclima").on("click",
  function (event) {
    event.preventDefault();

    const cidadaSelecionada = $("#cidades").val();
    
    const coordenadas = {
        saopaulo: { lat: -23.5505, lon: -46.6333},
        riodejaneiro: { lat: -22.9068, lon: -43.1729 },
        matogrosso: { lat: -12.6378, lon: -55.4231 },
        maranhao: { lat: -5.4271, lon: -45.3030 }
      };

    const coords = coordenadas[cidadaSelecionada];

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=a9ba5a5f153a114b113b90b2165a8753&units=metric&lang=pt_br`,
      type: "GET",
      success: function (resposta) {
        $("#lista-clima").empty();

        $("#lista-clima").append(`
            <li>Cidade: ${resposta.name}</li>
            <li>Temperatura: ${resposta.main.temp}ºC</li>
            <li>Temperatura Máxima: ${resposta.main.temp_max}ºC</li>
            <li>Temperatura Mínima: ${resposta.main.temp_min}ºC</li>
            <li>Velocidade do Vento: ${resposta.wind.speed} m/s </li>   
        `);
      },

      error: function (erro) {
        $("#lista-clima").append(`<li>ERRO: ${erro}</li>`);
      },
    });
  });
