// Your JavaScript goes here.

window.onload = function() {

    var clickButton = document.getElementById("button");
  
    clickButton.addEventListener("click", function(){
  
        var textToggle = document.getElementsByClassName("toggle_me");
  
        for (var i = 0; i <textToggle.length; i++) {
          if (textToggle[i].style.display === "none") {
            textToggle[i].style.display = "block";
           } 
          else {
            textToggle[i].style.display = "none"
          }
        }
    });
}; 