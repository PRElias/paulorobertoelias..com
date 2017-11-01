var urlpronta = "http://paulorobertoelias.com.br/api/api/jogos/getsteamall";

$.get(urlpronta, function (retorno) {

    $("#div_loading").css("display", "none");

    var items = [];

    $.each(retorno.Jogos, function (key) {
        items.push(
            (retorno.Jogos[key].ImageIconURL.substr((retorno.Jogos[key].ImageIconURL.length - 5)) != "/.jpg" ? "<a href='#' data-toggle='tooltip' title='" + retorno.Jogos[key].Name + " ***Tempo jogado: " + retorno.Jogos[key].Playtime +  "***'>" +
            "<img src='" + retorno.Jogos[key].ImageIconURL + "'.jpg' class='estante'></a>" : "")
        );
    });


    $("#resultado").empty();

    $("<div/>", {
        "class": "",
        html: items.join("")
    }).appendTo("#resultado");

    
});
