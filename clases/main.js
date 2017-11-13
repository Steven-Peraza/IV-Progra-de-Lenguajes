
var myGameArea;
var edel;
var block;
var eneIni = 5;

var timer;
var timer2;

var aliveBills = [];
var enemysList = [];

var igolsLeft;
var gamesLeft = 2;

var audio = new Audio('sonidos/battle_city.mp3');
var audiofire = new Audio("sonidos/Battle_City_SFX_6_.mp3");
var audiosteel = new Audio("sonidos/Battle_City_SFX_3_.mp3");
var audiobrick = new Audio("sonidos/Battle_City_SFX_5_.mp3");
var audiohit = new Audio("sonidos/Battle_City_SFX_7_.mp3");
var audioBay = new Audio("sonidos/Battle_City_SFX_11_.mp3");
var audioSlave = new Audio("sonidos/Battle_City_SFX_14_.mp3");


var nivelAct = 0;

function startGame() {
    nivelAct ++;
    igolsLeft = 5;
    myGameArea.start();
    audio.play();
    pickLevel(nivelAct);
    trumpApproves();
    for (var o = 0; o < 5; o++)
        aguilasRan();
    edel = new Tanque(24,12,24,24,0);
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
        this.interval = setInterval(updateGameArea, 100);
        ///
        timer = setInterval(creaEnemigos, 10000);
        timer2 = setInterval(moveAllEnemys,1000);
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

    if (igolsLeft === 0)
        gameOver(1);

    if (myGameArea.key && myGameArea.key === 37) {
        edel.mover(3);
    }

    if (myGameArea.key && myGameArea.key === 39) {
        edel.mover(4);
    }

    if (myGameArea.key && myGameArea.key === 38) {
        edel.mover(1);
    }

    if (myGameArea.key && myGameArea.key === 40) {
        edel.mover(2);
    }

    if (myGameArea.key && myGameArea.key === 70) {
        audiofire.pause();
        audiofire.currentTime = 0;
        audiofire.play();
        canon = edel.fire();
    }

    refresh();
    moveAllBills();
    myGameArea.context.restore();
}

function moveAllBills(){
    aliveBills.forEach(function (element) {
        if (element.die !== true)
            element.moverB();
    })
}
function moveAllEnemys() {
    enemysList.forEach(function (enemy) {
        if (enemy.die !== true) {
            enemy.mover(Math.floor((Math.random() * 4)) + 1);
            //enemy.fire();
            if(edel.posx === enemy.posx){
                if(edel.posy > enemy.posy){
                    enemy.mover(4);
                    audiofire.pause();
                    audiofire.currentTime = 0;
                    audiofire.play();
                    enemy.fire();
                }
                else {
                    enemy.mover(3);
                    audiofire.pause();
                    audiofire.currentTime = 0;
                    audiofire.play();
                    enemy.fire();
                }

            }
            if(edel.posy === enemy.posy){
                if(edel.posx > enemy.posx){
                    enemy.mover(2);
                    audiofire.pause();
                    audiofire.currentTime = 0;
                    audiofire.play();
                    enemy.fire();
                }
                else {
                    enemy.mover(1);
                    audiofire.pause();
                    audiofire.currentTime = 0;
                    audiofire.play();
                    enemy.fire();
                }
            }
        }

    })

}

function gameOver(estado) {
    clearInterval(timer);
    clearInterval(timer2);
    myGameArea.stop();
        //poner musiquita
        //nextlevel
    if(estado === 1) {
        if (gamesLeft <= 0) {
            myGameArea.context.fillStyle = "white";
            myGameArea.context.font = "bold 80px Arial";
            myGameArea.context.fillText("You Win!", 112, 212);
            var winimg = Image();
            winimg.src = 'imagenes/Winbg.png';
            winimg.onload = function () {
                myGameArea.context.drawImage(winimg, 300, 300)
            };
        } else {
            aliveBills = [];
            enemysList = [];
            startGame();
            gamesLeft--;
            myGameArea.stop();
        }
    }
    else{
        myGameArea.context.fill()
        myGameArea.context.fillStyle = "white";
        myGameArea.context.font = "bold 80px Arial";
        myGameArea.context.fillText("Game Over!", 112, 212);
        var loseimg = Image();
        loseimg.src = 'imagenes/Winbg.png';
        loseimg.onload = function () {
            myGameArea.context.drawImage(winimg, 300, 300)
        };


    }
}