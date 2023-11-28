document.addEventListener("DOMContentLoaded", function () {
    
    var buttons = document.querySelectorAll(".foods button");

    
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
    
            var foodD = this.parentNode;

    
            var foodT = foodD.querySelector("h4").textContent;

            alert("You selected: " + foodT);
        });
    });
});

