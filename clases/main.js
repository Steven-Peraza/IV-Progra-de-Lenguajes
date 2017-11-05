var myGamePiece;
var myGameArea;
var ctx;
//var bloques = [];
var block;
var i;
function startGame() {
    myGameArea.start();
    //myGamePiece = new component(30, 30, "imagenes/brick.png", 10, 120);
    pickLevel(1);
    //myGamePiece = new Tanque(10,120,30,30,0);
    //creaBloques();
    //myGamePiece2 = new Tanque(70,120,30,30,1);
}

myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 624;
        this.canvas.height = 624;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 40);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

/*function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.image = new Image();
    this.image.src = color;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}*/

/*function creaBloques(){
    /*for (var i =0; i< 15;i++){
        block = new Muro()
    block = new Muro(100, 200, 30, 30, 0);
    bloques.push(block);
    block = new Muro(50, 500, 30, 30, 1);
    bloques.push(block);
    block = new Muro(70, 280, 30, 30, 0);
    bloques.push(block);

}*/


function updateGameArea() {
    myGameArea.clear();
    myGameArea.context.fillStyle = '#111';
    myGameArea.context.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.context.save();

    refresh();

    myGameArea.context.restore();
    /*myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key === 37) {myGamePiece.speedX = -10;}
    if (myGameArea.key && myGameArea.key === 39) {myGamePiece.speedX = 10;}
    if (myGameArea.key && myGameArea.key === 38) {myGamePiece.speedY = -10;}
    if (myGameArea.key && myGameArea.key === 40) {myGamePiece.speedY = 10;}*/
    /*for (i = 0; i < bloques.length; i += 1){
        bloques[i].update();
    }
    for (i = 0; i < bloques.length; i += 1) {
        if (myGamePiece.crashWith(bloques[i]) && (myGameArea.key && myGameArea.key === 37)) {
            myGamePiece.speedY = 0;
            myGamePiece.speedX = 0;
            //myGamePiece.posx +=10;
            myGamePiece.newPos();
        }
        else if (myGamePiece.crashWith(bloques[i]) && (myGameArea.key && myGameArea.key === 38)) {
            myGamePiece.speedY = 0;
            myGamePiece.speedX = 0;
            //myGamePiece.poy +=10;
        }
        else if (myGamePiece.crashWith(bloques[i]) && (myGameArea.key && myGameArea.key === 39)) {
            myGamePiece.speedY = 0;
            myGamePiece.speedX = 0;
            //myGamePiece.posx -=10;
        }
        else if (myGamePiece.crashWith(bloques[i]) && myGameArea.key === 40) {
            myGamePiece.speedY = 0;
            myGamePiece.speedX = 0;
            //myGamePiece.posy -=10;
            //myGamePiece.newPos();
        }
    }
*/
    /*myGamePiece.newPos();
    myGamePiece.update();*/

    /*myGamePiece2.speedX = Math.floor(Math.random() * (5 - -5 + 1) ) + -5;
    myGamePiece2.speedY = Math.floor(Math.random() * (5 - -5 + 1) ) + -5;
    myGamePiece2.newPos();
    myGamePiece2.update();*/
}

