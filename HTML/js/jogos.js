var urlpronta = "http://paulorobertoelias.com.br/api/api/jogos/getsteamall";

$.get(urlpronta, function (retorno) {

    var items = [];

    $.each(retorno.Jogos, function (key) {
        items.push(
            "<li class='list-group-item' id='" + retorno.Jogos[key].AppId + "'>" +
            "<img src='" + retorno.Jogos[key].ImageIconURL + "'.jpg'><br/>" +
            "<b>" + retorno.Jogos[key].Name + "</b><br/>" +
            "</li>"
        );
    });

    //limpa a DIV resultado
    $("#resultado").empty();

    $("<ul/>", {
        "class": "list-group",
        html: items.join("")
    }).appendTo("#resultado");

    $("#resultado").wrap("<div class='list-group' id='res_wrap'></div>");
});
