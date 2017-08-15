/**
 * Created by Gotcha on 2017/8/14.
 */
window.onload = initialSearch();

function initialSearch() {
    var container = document.getElementsByClassName("competitions")[0];
    var cards = container.getElementsByClassName("competition-card");
    var allCards = Array.prototype.slice.call(cards, 0);
    var input = document.getElementById("search");
    var button = document.getElementById("search-btn");

    var warning = document.createElement("h1");
    var txt = document.createTextNode("无相关比赛");
    warning.appendChild(txt);
    warning.className = "warning";

    input.onchange = function () {
        loadAllCards();

        for (var i = cards.length - 1; i >= 0; i--) {
            var cptName = cards[i].getElementsByTagName("h2")[0].innerHTML;
            if (cptName.indexOf(input.value) == -1) {
                cards[i].parentNode.removeChild(cards[i]);
            }
        }
        checkCompetition();
    }

    input.oninput = function () {
        if (input.value == "") {
            loadAllCards();
            checkCompetition();
        }
    }

    button.onclick = input.onchange();

    function checkCompetition() {
        var warningNode = document.getElementsByClassName("warning")[0];

        if (cards.length == 0 && warningNode == undefined)
            container.appendChild(warning);

        if (cards.length != 0 && warningNode != undefined)
            warningNode.parentNode.removeChild(warningNode);

    }

    function loadAllCards() {
        for (var i = 0; i < allCards.length; i++) {
            container.appendChild(allCards[i]);
        }
    }
}