var rocket = document.getElementById("rocket");
var board = document.getElementById("board");
var img = document.getElementById("button-game");

var m = new Audio('../../../sound/game-sound.mp3');
var p = true;
var o = new Audio('../../../sound/game-over.mp3');

setTimeout(function() {
    o.pause();
    m.play();
})

window.addEventListener("keydown", (e) => {

    var left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
        rocket.style.left = left - 10 + "px";
    }
    //460  => board width - rocket width
    else if (e.key == "ArrowRight" && left <= 460) {
        rocket.style.left = left + 10 + "px";
    }

    //81 = q
    if (e.keyCode == 81) {
        var bullet = document.createElement("div");
        bullet.classList.add("bullets");
        board.appendChild(bullet);

        var movebullet = setInterval(() => {
            var rocks = document.getElementsByClassName("rocks");

            for (var i = 0; i < rocks.length; i++) {
                var rock = rocks[i];
                if (rock != undefined) {
                    var rockbound = rock.getBoundingClientRect();
                    var bulletbound = bullet.getBoundingClientRect();

                    //bullet top < rock bottom && bullet bottom > rock top
                    if (
                        bulletbound.left >= rockbound.left &&
                        bulletbound.right <= rockbound.right &&
                        bulletbound.top <= rockbound.top &&
                        bulletbound.bottom <= rockbound.bottom
                    ) {
                        rock.parentElement.removeChild(rock); //remove the rock
                        //Points
                        document.getElementById("points").innerHTML =
                            parseInt(document.getElementById("points").innerHTML) + 1;
                    }
                }
            }
            var bulletbottom = parseInt(
                window.getComputedStyle(bullet).getPropertyValue("bottom")
            );

            //stop bullets
            if (bulletbottom >= 500) {
                clearInterval(movebullet);
            }

            bullet.style.left = left + "px";
            bullet.style.bottom = bulletbottom + 3 + "px";
        });
    }
});

var generaterocks = setInterval(() => {
    var rock = document.createElement("div");
    rock.classList.add("rocks");
    var rockleft = parseInt(
        window.getComputedStyle(rock).getPropertyValue("left")
    );
    rock.style.left = Math.floor(Math.random() * 470) + "px";

    board.appendChild(rock);
}, 1700);

var moverocks = setInterval(() => {
    var rocks = document.getElementsByClassName("rocks");

    if (rocks != undefined) {
        for (var i = 0; i < rocks.length; i++) {
            var rock = rocks[i];
            var rocktop = parseInt(
                window.getComputedStyle(rock).getPropertyValue("top")
            );
            //475 => boardheight - rockheight + 25
            if (rocktop >= 475) {
                m.pause();
                o.currentTime = 1
                o.play();
                alert('Game Over');
                clearInterval(moverocks);
                window.location.reload();
            }

            rock.style.top = rocktop + 25 + "px";
        }
    }
}, 500);