
var levelActual;
var aleaX; // X GENERADO ALEATORIAMENTE
var aleaY; // Y GENERADO ALEATORIAMENTE
var aleaType; // TIPO GENERADO ALEATORIAMENTE
var aguila; // OBJETIVO
var enemy; // ENEMIGO
var canon; // BALA

var level1 = [
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

var level2 = [
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
var level3 = [
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

// SELECCIONA UNA SEMILLA DE NIVEL ANTES DE COMENZAR
function pickLevel(opcion){
    switch (opcion){
        case 1:
            levelActual = level1;
            break;
        case 2:
            levelActual = level2;
            break;
        case 3:
            levelActual = level3;
            break;
    }

}

// REDIBUJA LA MATRIZ DE OBJETOS CUANDO HAY CAMBIOS
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
                else if (levelActual[y][x].getNombre() === "gavilan") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "border") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "principal") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "inutil") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "tanque") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "rapido") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
                else if (levelActual[y][x].getNombre() === "bill") {
                    myGameArea.context.drawImage(levelActual[y][x].image, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
                }
            }
        }
    }
}

// GENERA LOS OBJETIVOS EN EL MAPA ALEATORIAMENTE
function aguilasRan(){
    aleaX = Math.floor((Math.random() * 24)+1);
    aleaY = Math.floor((Math.random() * 24)+1);
    aleaType = Math.floor((Math.random() * 2) + 1);
    aguila= new Igol(aleaX,aleaY,aleaType);
    if (levelActual[aleaX][aleaY] === null )//comparar con los otros elementos
        levelActual[aleaX][aleaY] = aguila;
    else
        aguilasRan();
}
// CREA EL MURO DE AGUA EN LOS BORDES DE LA MATRIZ
function trumpApproves() {
    for (var v = 0;v < 26;v++){
        for (var c = 0; c<26;c++){
            if (v === 0 || v === 25 || c === 0 || c === 25){
                block = new Muro(v,c,24,24,3);
                levelActual[v][c] = block;
            }

        }
    }
}

// CREA ENEMIGOS ALEATORIOS EN EL MAPA.
function creaEnemigos() {
    aleaX = Math.floor((Math.random() * 24)+1);
    aleaY = Math.floor((Math.random() * 24)+1);
    aleaType = Math.floor((Math.random() * 3) + 1);
    enemy = new Tanque(aleaX,aleaY,24,24,aleaType);
    if (levelActual[aleaX][aleaY] === null){
        levelActual[enemy.posx][enemy.posy] = enemy;
        enemysList.push(enemy);
    }
    else
        creaEnemigos();

}

// CREA BLOQUES ALEATORIAMENTE EN EL MAPA Y DE TIPO ALEATORIO.
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

