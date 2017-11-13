//declaracion de variables globales necesarias para el correcto funcionamiento del juego
var myGameArea;
var edel;// tanque principal
var block;
var eneIni = 5;//numero de enemigos iniciales

var timer;
var timer2;
//listas que almacenaran los objetos de balas y tanques enemigos restantes
var aliveBills = [];
var enemysList = [];

//cantidad de objetivos por destruir
var igolsLeft;
//cantidad de niveles por jugar
var gamesLeft = 2;
//variables de audio
var audio = new Audio('sonidos/battle_city.mp3');
var audiofire = new Audio("sonidos/Battle_City_SFX_6_.mp3");
var audiosteel = new Audio("sonidos/Battle_City_SFX_3_.mp3");
var audiobrick = new Audio("sonidos/Battle_City_SFX_5_.mp3");
var audiohit = new Audio("sonidos/Battle_City_SFX_7_.mp3");
var audioBay = new Audio("sonidos/Battle_City_SFX_11_.mp3");
var audioSlave = new Audio("sonidos/Battle_City_SFX_14_.mp3");


var nivelAct = 0;
//funcion inicial que carga los elementos inciales y comienza el juego
function startGame() {
    nivelAct ++;
    //5 objetivos a destruir por nivel
    igolsLeft = 5;
    //se carga el canvas
    myGameArea.start();
    //se toca la musica de inicio
    audio.play();
    //se elige el nivel a jugar y se carga la matriz elegida
    pickLevel(nivelAct);
    //se crean los bordes invulnerables alrededor en los limites del mapa
    trumpApproves();
    //se crean 5 aguilas u objetivos aleatorios
    for (var o = 0; o < 5; o++)
        aguilasRan();
    //se crea el objeto de tanque principal
    edel = new Tanque(24,12,24,24,0);
    //se coloca en la matriz de juego
    levelActual[edel.posx][edel.posy] = edel;
    //se crean 5 enemigos inciales
    for (var i = 0; i<eneIni; i++)
        creaEnemigos();
    //se crean 75 bloques aleatorios
    for (var u = 0; u < 75; u++)
        creaBloques();
}

//var que posee el canvas y todos los elementos asociados a el...
myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        //alto y ancho del canvas
        this.canvas.width = 624;
        this.canvas.height = 624;
        //se crea el contexto del canveas, en este se trabajara para todas las demas funciones
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //se crea un intervalo que cada cierto tiempo se llama a la funcion de recargar pantalla
        this.interval = setInterval(updateGameArea, 100);
        //se crean dos intervalos que cada cierto tiempo (10 segundos y 1 segundo) crean enemigos y mueven los mismos
        timer = setInterval(creaEnemigos, 10000);
        timer2 = setInterval(moveAllEnemys,1000);
        //se crea un listener que escuche si el usuario oprime una tecla
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

//fucnion que refresca el canvas y hace las comprobaciones del ciclo de juego
function updateGameArea() {
    //se limpia el canvas
    myGameArea.clear();
    //se le da un fondo negro
    myGameArea.context.fillStyle = '#111';
    myGameArea.context.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.context.save();

    //si ya se destruyeron todas las aguilas, se procede al siguiente nivel
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
    //se comprueba si se oprimio el boton f de disparar...
    if (myGameArea.key && myGameArea.key === 70) {
        audiofire.pause();
        audiofire.currentTime = 0;
        audiofire.play();
        //se crea un nuevo objeto de bala...
        canon = edel.fire();
    }
    //se refresca la matriz grafica
    refresh();
    //se mueven las balas que esten vivas en el momento
    moveAllBills();
    myGameArea.context.restore();
}

//funcion qu mueve todas las balas que se encuentren vivas en el momento
function moveAllBills(){
    aliveBills.forEach(function (element) {
        if (element.die !== true)
            element.moverB();
    })
}
//funcion que mueve todos los enemigos y revisa si el cañon esta apuntando al tanque principal, en ese caso, disparan...
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

//funcion que acaba el nivel y crea uno nuevo, en caso de que sean 3 niveles pasados, se acaba el juego...xD
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
        myGameArea.context.fill();
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
