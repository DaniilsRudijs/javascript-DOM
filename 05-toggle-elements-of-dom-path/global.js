// Your JavaScript goes here.

window.onload = function() {

    var clickToggle = document.getElementById('toggle_button');
  
    clickToggle.addEventListener("click", function() {
  
      var textToggle = document.querySelectorAll("ul.second_five li");
  
      for (var i = 0; i < textToggle.length; i++) {
        if (textToggle[i].style.display === "list-item") {
          textToggle[i].style.display = "none";
        }
        else {
          textToggle[i].style.display = "list-item";
        }
      }
  
    });
  
};