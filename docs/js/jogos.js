var app = {
    games: []
};

app.getGames = function () {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../games/games.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            app.renderizeGames(xobj.responseText);
        }
    }
    xobj.send(null);
}

app.renderizeGames = function (response) {
    app.games = JSON.parse(response);
    var items = [];

    for (var index in app.games) {
        var game = app.games[index];
        items.push(
            "<div class='row' id='" + game.appID + "'>" +
            //"<p>" + game.name + "</p > " +
            "<img class='col cover' src='" + game.logoURL + "' alt='logo' data-toggle='modal' data-target='#myModal" + game.appId + "' /img>" +
            "</div><div id='myModal" + game.appID + "' class='modal fade' role='dialog'>" +
            "<div class='modal-dialog mymodal'>" +
            "<div class='modal-content mymodal-content'>" +
            "<div class='modal-header'>" +
            "<h6 class='modal-title'>" + game.name + "</h6>" +
            "</div><div class='modal-body'>" +
            "<p><small>Informações sobre o jogo</small></p>" +
            //"<button type='button' class='close' data-dismiss='modal'>Fechar</button>" +
            "</div></div></div></div>"
        );
    }

    var wrapper = document.createElement('div');
    wrapper.innerHTML = items.join("");

    var main = document.querySelector('div.main_div');
    main.appendChild(wrapper);

};

window.onload = function () {
    app.getGames();
}

function navigateToGame() {
    var pesquisa = encodeURIComponent($('#procurar').val().toUpperCase());
    var jogo = document.getElementById(pesquisa);

    if (jogo !== null) {
        $('html, body').animate({
            scrollTop: $(jogo).offset().top - 35
        }, 1000);
    }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("main_div").style.marginTop = "50px";
    } else {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("main_div").style.marginTop = "0";
    }
    prevScrollpos = currentScrollPos;
};

$('#procurar').focus(
    function () {
        $(this).val('');
    }
);

$('#procurar').click(
    function () {
        $(this).val('');
    }
);


//Autocomplete
// $(function () {
//     var availableTags = [];
//     $("div#main_div.row.main_div").children("span").children("img").each(function () {
//         availableTags.push($(this).attr("data-game"));
//     });

//     $("#procurar").autocomplete({
//         source: availableTags,
//         select: function (event, ui) {
//             event.preventDefault();
//             $('#procurar').val(ui.item.value);
//             navigateToGame();
//         }
//     });
// });