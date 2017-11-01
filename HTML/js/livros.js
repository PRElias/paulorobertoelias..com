var urlpronta = "http://paulorobertoelias.com.br/api/api/livros/getall";

$.get(urlpronta, function (retorno) {

    $("#div_loading").css("display", "none");

    var items = [];

    $.each(retorno, function (key) {
        items.push(
            "<a href='#' data-toggle='tooltip' title='" + retorno[key].Title + "'>" +
            "<img src='" + retorno[key].ImageUrl + "'.jpg' class='estante'></a>"
        );
    });

    
    $("#resultado").empty();

    $("<div/>", {
        "class": "",
        html: items.join("")
    }).appendTo("#resultado");


});
