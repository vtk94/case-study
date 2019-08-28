let html=null;
let Effect = function () {
    this.show = function (value,x,y) {
        context.beginPath();
        context.fillStyle = "red";
        context.font="20px Georgia";
        context.fillText(value,x,y);
        context.closePath();
    };
    this.showScore = function () {
        html=" ";
        for (let i=0;i<dataCookies.length;i++){
            html+="<tr>";
            html+="<td>";
            html+=i+1;
            html+="</td>";
            for (let j=0;j<dataCookies[i].length;j++){
                html+="<td>";
                html+=dataCookies[i][j];
                html+="</td>";
            }
            html+="</tr>"
        }
        document.getElementById("scoreBoard").innerHTML=html;
    };
};