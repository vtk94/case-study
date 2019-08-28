let barrierArr=[];
let Barrier = function (x,y) {
this.x = x;
this.y = y;
this.size = 20;
this.setBarrier = function () {
    let count = 0;
   do {
       this.x = Math.floor(Math.random()*20)*20;
       this.y = Math.floor(Math.random()*20)*20;
       count++;
   }while (this.x===snakeArray[0].x&&this.y===snakeArray[0].y);
    barrierArr.push(new Barrier(this.x,this.y,this.size))
};
this.show = function () {
  context.beginPath();
  context.fillStyle = "yellow";
  context.rect(this.x,this.y,this.size,this.size);
  context.fill();
  context.closePath();
}
};
let barrier = new Barrier();