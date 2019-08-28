
let Snake = function (x, y) {
    this.x = x;
    this.y = y;
    this.size = box;
    this.show = function (color) {
        context.beginPath();
        context.rect(this.x, this.y, this.size, this.size);
        context.strokeStyle = color;
        context.stroke();
        context.closePath();
    };

    this.move = function () {
            snakeArray.pop();
            snakeArray.unshift(new Snake(newSnakeX, newSnakeY))
    };

    this.eatFood =function () {
        snakeArray.unshift(new Snake(newSnakeX, newSnakeY));
    };

    this.moveRight = function () {
        newSnakeX = snakeArray[0].x + box;
        newSnakeY = snakeArray[0].y
    };

    this.moveLeft = function () {
        newSnakeX = snakeArray[0].x - box;
        newSnakeY = snakeArray[0].y
    };

    this.moveUp = function () {
        newSnakeX = snakeArray[0].x;
        newSnakeY = snakeArray[0].y - box;
    };

    this.moveDown = function () {
        newSnakeX = snakeArray[0].x;
        newSnakeY = snakeArray[0].y + box;
    };

};