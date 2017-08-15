/**
 * Created by Gotcha on 2017/8/15.
 */

window.onload = function () {
    initialToTop();
}

function initialToTop() {
    var icon = document.getElementsByClassName("to-top")[0];

    document.body.onscroll = function () {
        if (document.body.scrollTop != 0)
            icon.style.display = "block";
        else
            icon.style.display = "none";
    }

    icon.onclick = function () {
        document.body.scrollTop = 0;
    }
}