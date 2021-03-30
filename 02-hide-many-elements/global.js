window.onload = function() {

var clickButton = document.getElementById("button");

    clickButton.addEventListener("click", function(){

        var textHide = document.getElementsByClassName("hide_me");

        for (var i = 0; i < textHide.length; i++) {
            textHide[i].style.display = "none";
        }

    });

}; 