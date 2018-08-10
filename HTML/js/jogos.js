var app = {
    isLoading: true,
    visibleCards: {},
    games: [],
    spinner: document.querySelector('.loader')
};

app.getGames = function (force) {
    var url = 'http://mycollectionsapi.paulorobertoelias.com.br/api/Games';
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                app.games = request.response;
                localStorage.setItem("games", app.games);
            }
        }
    };
    request.open('GET', url, false);
    request.send();

    app.renderizeGames();
    app.spinner.setAttribute('hidden', true);

};

app.renderizeGames = function () {
    var items = [];
    var games = JSON.parse(app.games);
    for (var index in games) {
        var game = games[index];

        items.push(
            "<span id='" + game.gameID + "' class='game'>" +
            //"<p>" + game.name + "</p > " +
            "<img class='cover' src='" + game.cover + "' alt='logo' data-toggle='modal' data-target='#myModal" + game.gameID + "' /img>" +
            "</div><div id='myModal" + game.gameID + "' class='modal fade' role='dialog'>" +
            "<div class='modal-dialog mymodal'>" +
            "<div class='modal-content mymodal-content'>" +
            "<div class='modal-header'>" +
            "<h6 class='modal-title'>" + game.name + "</h6>" +
            "</div><div class='modal-body'>" +
            "<p><small>Informações sobre o jogo</small></p>" +
            //"<button type='button' class='close' data-dismiss='modal'>Fechar</button>" +
            "</div></div></div></div></span>"
        );
    }

    var wrapper = document.createElement("div");
    wrapper.setAttribute('class', 'container-fluid');
    wrapper.innerHTML = items.join("");

    var main = document.querySelector('div.main_div');
    main.appendChild(wrapper);
    
};

window.onload = function(){
    app.getGames(false);
}
