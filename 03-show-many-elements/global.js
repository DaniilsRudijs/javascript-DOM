window.onload = function() {

    var clickButton = document.getElementById("button");
    
    clickButton.addEventListener("click", function(){
    
        var textShow = document.getElementsByClassName("show_me");
    
        for (var i = 0; i < textShow.length; i++) {
            textShow[i].style.display = "block";
        }
    
    });
    
};