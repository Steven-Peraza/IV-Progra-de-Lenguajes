var myGamePiece;
var myGameArea;
var ctx;
//var bloques = [];
var block;
var i;
var eneIni = 5;

var timer;
var timer2;


function startGame() {
    myGameArea.start();
    pickLevel(1);
    aguilasRan();
    aguilasRan();
    edel = new Tanque(25,12,24,24,0);
    sham = new Tanque(12,12,24,24,0);
    levelActual[edel.posx][edel.posy] = edel;
    for (var i = 0; i<eneIni; i++)
        creaEnemigos();
    for (var u = 0; u < 75; u++)
        creaBloques();
}

myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 624;
        this.canvas.height = 624;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 80);
        ///
        timer = setInterval(creaEnemigos, 10000);
        ///
        //timer2 = setInterval(sham.mover(Math.floor((Math.random() * 4) + 1)),1200);
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
};


function updateGameArea() {
    myGameArea.clear();
    myGameArea.context.fillStyle = '#111';
    myGameArea.context.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.context.save();
    sham.mover(Math.floor((Math.random() * 4) + 1));
    if (myGameArea.key && myGameArea.key === 37) {
        //imgTank =imgTankL;
        edel.mover(3);
    }

    if (myGameArea.key && myGameArea.key === 39) {
        //imgTank =imgTankR;
        edel.mover(4);
    }

    if (myGameArea.key && myGameArea.key === 38) {
        //imgTank =imgTankUP;
        edel.mover(1);
    }

    if (myGameArea.key && myGameArea.key === 40) {
        //imgTank =imgTankDW;
        edel.mover(2);
    }

    if (myGameArea.key && myGameArea.key === 70) {
        //imgTank =imgTankDW;
        edel.fire();
    }

    refresh();

    myGameArea.context.restore();
}

