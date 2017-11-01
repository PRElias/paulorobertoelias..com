var urlpronta = "http://paulorobertoelias.com.br/api/api/livros/getall";

$.get(urlpronta, function (retorno) {

    var items = [];

    $.each(retorno, function (key) {
        items.push(
            "<li class='list-group-item' id='" + retorno[key].Title + "'>" +
            "<img src='" + retorno[key].ImageUrl + "'.jpg'><br/>" +
            "<b>" + retorno[key].Title + "</b><br/>" +
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
