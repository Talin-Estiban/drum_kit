for (var n = 0; n < document.querySelectorAll(".drum").length; n++) {
    document.querySelectorAll("button")[n].addEventListener("click", function () {
        var btnName = this.innerHTML
        makeSound(btnName)
        animate(btnName)
    })
    document.addEventListener("keydown", function (event) {
        makeSound(event.key)
        animate(event.key)
    })
    function makeSound(n) {
        switch (n) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3")
                snare.play()
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play()
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play()
                break;

            default:
                console.log('no such button with sound ')
                break;
        }
    }
    function animate(n) {
        var activeBtn = document.querySelector("." + n)
        activeBtn.classList.add("pressed")
        setTimeout(function () {
            activeBtn.classList.remove("pressed")
        }, 150)
    }
}

