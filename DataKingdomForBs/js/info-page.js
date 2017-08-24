/**
 * Created by Gotcha on 2017/8/21.
 */
window.addEventListener("load", initialConfirm, false);

function initialConfirm() {
    var joinBtn = document.getElementById("join");
    var cancelBtn = document.getElementById("cancel");
    var confirmBtn = document.getElementById("OK");

    var win = document.getElementsByClassName("confirm")[0];
    joinBtn.addEventListener("click", showWin, false);
    cancelBtn.addEventListener("click", hideWin, false);
    confirmBtn.addEventListener("click", hideWin, false);

    function showWin() {
        win.style.display = "block";
    }

    function hideWin() {
        win.style.display = "none";
    }
}