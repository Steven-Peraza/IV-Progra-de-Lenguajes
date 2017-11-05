

function Tanque(posx,posy,ancho,alto,tipo) {
    this.gamearea = myGameArea;
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
    if (tipo === 0) {// tanque tipo 1: el principal
        this.tipo = 0;
        this.image = new Image();
        this.image.src = "imagenes/tank.png";
        this.speedX = 0;
        this.speedY = 0;
        this.life = 3;
    }
    else if (tipo === 1) {// tanque tipo 2: enemigo inutil
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/brick.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 1;
    }
    else if (tipo === 2) {// tanque tipo 3: enemigo tanque tanque
        this.tipo = 2;
        this.image = new Image();
        this.image = "imagenes/brick.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 3;
    }
    else if (tipo === 3) {// tanque tipo 4: enemigo bala rapida
        this.tipo = 3;
        this.image = new Image();
        this.image = "imagenes/brick.png";
        this.speedX = 3;
        this.speedY = 3;
        this.life = 2;
    }

    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(
            this.image,
            this.posx,
            this.posy,
            this.ancho,
            this.alto);
    };

    this.newPos = function() {
        this.posx += this.speedX;
        this.posy += this.speedY;
    };

    this.crashWith = function(otherobj) {
        var myleft = this.posx;
        var myright = this.posx + (this.ancho);
        var mytop = this.posy;
        var mybottom = this.posy + (this.alto);
        var otherleft = otherobj.posx;
        var otherright = otherobj.posx + (otherobj.ancho);
        var othertop = otherobj.posy;
        var otherbottom = otherobj.posy + (otherobj.alto);
        var crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
/*
    this.mover(direccion,posxac,posyac){
         switch (direccion){
             case 1: //izquierds
                 if (nivel.levelActual[posxac-1][posyac] != 0 || posxac != 0){
                     nivel.levelActual[posxac-1][posyac] = 5;
                    break;}
                 else
                     break;
             case 2: //derecha
                 if (nivel.levelActual[posxac+1][posyac] != 0 || posxac != 25){
                     nivel.levelActual[posxac+1][posyac] = 5;
                     break;}
                 else
                     break;
             case 3: //arriba
                 if (nivel.levelActual[posxac][posyac-1] != 0 || posyac != 0){
                     nivel.levelActual[posxac][posyac-1] = 5;
                     break;}
                 else
                     break;
             case 4: //abajo
                 if (nivel.levelActual[posxac][posyac+1] != 0 || posyac != 25){
                     nivel.levelActual[posxac][posyac+1] = 5;
                     break;}
                 else
                     break;
         }

    }
*/
}

