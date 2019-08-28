let box = 20;
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let snakeArray = [];
let keyCode = null;
let newSnakeX;
let newSnakeY;
let colorFood = "white";
let food = new Food();
let score = 0;
let count = 1;
let square = new Snake();
let arrCookie = [];
let dataCookies;
let name = null;
let timeBonus = 0;
let effect = new Effect();
let speedLoop = 100;
let isDead = false;
window.addEventListener("keydown", eventBoard);
let Game = function () {
    this.setup = function () {
        snakeArray.push(new Snake(60, 60));
    };
    this.loop = function () {
        game.draw();
        food.show(colorFood);
        game.squareEat();
        game.squareMove();
        game.bonus();
        game.overGame();
        barrier.show();
        effect.show("Score = " + score, 20, 20);
    };
    this.draw = function () {
        context.clearRect(0, 0, 400, 400);
        for (let i = 0; i < snakeArray.length; i++) {
            if (i === 0) {
                snakeArray[0].show("red");
            } else {
                snakeArray[i].show("white")
            }
        }
        for (let i = 0; i < barrierArr.length; i++) {
            barrierArr[i].show();
        }
    };
    this.setCookies = function () {
        if (name != null && name !== "") {
            document.cookie = name + "=" + score;
        }
    };

    this.getCookies = function () {
        let data = document.cookie;
        dataCookies = [];
        arrCookie = data.split(";");
        for (let i = 0; i < arrCookie.length; i++) {
            let str = arrCookie[i].toString();
            dataCookies.push(str.split("="))
        }
    };

    this.confirmScore = function () {
        let self = this;
        setTimeout(function () {
            let save = confirm("Bạn có muốn lưu kết quả không");
            if (save) {
                self.saveScore();
            } else self.reFreshGame();

        }, 100);
    };

    this.saveScore = function () {
        name = prompt("Nhập tên người chơi:");
        this.setCookies();
        this.getCookies();
        effect.showScore();
    };

    this.reFreshGame = function () {
        location.reload();

    };
    this.squareEat = function () {
        if (snakeArray[0].x === food.x && snakeArray[0].y === food.y) {
            square.eatFood();
            food.update();
            this.score();
        }
    };
    this.bonus = function () {
        if (count % 5 === 0) {
            food.redSquare();
        } else food.whiteSquare();
    };

    this.score = function () {
        if (colorFood === "red") {
            score += 3;
            barrier.setBarrier();
        } else {
            score++
        }
        count++;
    };
    this.squareMove = function () {
        if (keyCode === "right") {
            square.moveRight();
            square.move();
        }
        if (keyCode === "left") {
            square.moveLeft();
            square.move();

        }
        if (keyCode === "up") {

            square.moveUp();
            square.move();

        }
        if (keyCode === "down") {
            square.moveDown();
            square.move();
        }
    };

    this.overGame = function () {
        this.impactBarrier();
        this.impactWallCanvas();
        this.bitchMyself();
        let self = this;
        if (isDead) {
               setTimeout(function () {
                   effect.show("Over Game!", 160, 200);
                   self.confirmScore();
               },200);
            clearInterval(t);
        }
    };
    this.impactBarrier = function () {
        for (let i = 0; i < barrierArr.length; i++) {
            if (barrierArr[i].x === snakeArray[0].x && barrierArr[i].y === snakeArray[0].y) {
                if (snakeArray.length === 1) {
                    isDead = true;
                } else snakeArray.shift();
            }
        }
    };
    this.bitchMyself = function () {
        for (let i = 1; i < snakeArray.length; i++) {
            if (snakeArray[0].x === snakeArray[i].x && snakeArray[0].y === snakeArray[i].y) {
                isDead = true;
            }
        }
    };
    this.impactWallCanvas = function () {
        if (snakeArray[0].x <= -box || snakeArray[0].x >= canvas.width || snakeArray[0].y <= -box || snakeArray[0].y >= canvas.height) {
            if (snakeArray.length === 1) {
                isDead = true;
            } else snakeArray.shift();
        }
    }
};

function eventBoard(evt) {
    if (evt.which === 37 && keyCode !== "right") {
        keyCode = "left";
    }
    if (evt.which === 38 && keyCode !== "down") {
        keyCode = "up";
    }
    if (evt.which === 39 && keyCode !== "left") {
        keyCode = "right";
    }
    if (evt.which === 40 && keyCode !== "up") {
        keyCode = "down";
    }

}


let game = new Game();
game.setup();
let t = setInterval(game.loop, speedLoop);
game.getCookies();
effect.showScore();