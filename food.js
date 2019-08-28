let Food = function () {
    this.x = Math.floor(Math.random() * 20) * box;
    this.y = Math.floor(Math.random() * 20) * box;
    this.size = box;

    this.show = function (color) {
        context.beginPath();
        context.fillStyle = color;
        context.rect(this.x, this.y, this.size, this.size);
        context.fill();
        context.closePath();
    };

    this.update = function () {
        this.x = Math.floor(Math.random() * 20) * box;
        this.y = Math.floor(Math.random() * 20) * box;
    };
    this.redSquare = function () {
            colorFood = "red";
            timeBonus = 400;
            setTimeout(function () {
                count = 1;
            }, 2000);
    };
    this.whiteSquare = function () {
           colorFood="white";
    }
};