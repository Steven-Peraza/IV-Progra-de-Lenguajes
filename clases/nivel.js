
var levelActual;
var txAC;
var tyAC;
var aleaX;
var aleaY;
var aleaType;
var aguila;
var enemy;
var canon;

var level4 = [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
];

var iCellSize = 24;
var x;
var y;
/*imgBrick = new Image();
imgBrick.src = "imagenes/brick.png";

imgSteel = new Image();
imgSteel.src = "imagenes/steel.png";

imgTankUP = new Image();
imgTankUP.src = "imagenes/tankU.fw.png";

imgTankDW = new Image();
imgTankDW.src = "imagenes/tankD.fw.png";

imgTankL = new Image();
imgTankL.src = "imagenes/tankL.fw.png";

imgTankR = new Image();
imgTankR.src = "imagenes/tankR.fw.png";

imgWater = new Image();
imgWater.src = "imagenes/water.png";

imgIgol = new Image();
imgIgol.src = "imagenes/igol.fw.png";



var imgTank;
imgTank = imgTankUP;*/

function pickLevel(opcion){
    switch (opcion){
        case 1:
            levelActual = level4;
            break;
        case 2:
            levelActual = level1;
            break;
        case 3:
            levelActual = level1;
            break;
    }

}


function refresh() {
    for (y = 0; y < 26; y++) {
        for (x = 0; x < 26; x++) {
            if (levelActual[y][x] === null) {// skip
            }
            else {
                if (levelActual[y][x].getNombre() === "ladrillo") {// draw brick block
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "ragnite") {// draw steel block
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "aguila") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "edelweiss") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "equus") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "lupus") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "geirorul") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "bill") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
            }
        }
    }
}


function aguilasRan(){
    aleaX = Math.floor((Math.random() * 25));
    aleaY = Math.floor((Math.random() * 25));

    aguila= new Igol(aleaX,aleaY);
    if (levelActual[aleaX][aleaY] === null )//comparar con los otros elementos
        levelActual[aleaX][aleaY] = aguila;
    else
        aguilasRan();
}

function creaEnemigos() {
    aleaX = Math.floor((Math.random() * 24)+1);
    aleaY = Math.floor((Math.random() * 24)+1);
    aleaType = Math.floor((Math.random() * 3) + 1);
    enemy = new Tanque(aleaX,aleaY,24,24,aleaType);
    if (levelActual[aleaX][aleaY] === null){
        levelActual[enemy.posx][enemy.posy] = enemy;
    }
    else
        creaEnemigos();

}

function creaBloques() {
    aleaX = Math.floor((Math.random() * 24)+1);
    aleaY = Math.floor((Math.random() * 24)+1);
    aleaType = Math.floor((Math.random() * 2) + 1);
    block = new Muro(aleaX,aleaY,24,24,aleaType);
    if (levelActual[aleaX][aleaY] === null){
        levelActual[block.posx][block.posy] = block;
    }
    else
        creaBloques();

}