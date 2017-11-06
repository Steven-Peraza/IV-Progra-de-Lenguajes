

function Tanque(posx,posy,ancho,alto,tipo) {
    this.gamearea = myGameArea;
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
    if (tipo === 0) {// tanque tipo 1: el principal
        this.tipo = 0;
        this.image = new Image();
        this.image.src = "imagenes/tankU.fw.png";
        this.speedX = 0;
        this.speedY = 0;
        this.life = 3;
        this.nombre = "edelweiss";
        this.direccion = "UP";
    }
    else if (tipo === 1) {// tanque tipo 2: enemigo inutil
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/inutilD.fw.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 1;
        this.nombre = "equus";
        this.direccion = "DW";
    }
    else if (tipo === 2) {// tanque tipo 3: enemigo tanque tanque
        this.tipo = 2;
        this.image = new Image();
        this.image.src = "imagenes/tigerD.fw.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 3;
        this.nombre = "lupus";
        this.direccion = "DW";
    }
    else if (tipo === 3) {// tanque tipo 4: enemigo bala rapida
        this.tipo = 3;
        this.image = new Image();
        this.image.src = "imagenes/fastD.fw.png";
        this.speedX = 3;
        this.speedY = 3;
        this.life = 2;
        this.nombre = "geirorul";
        this.direccion = "DW";
    }


    this.hit = function () {
        if (this.life > 0)
            this.life -= 1;
        else
            levelActual[this.posx][this.posy] = null;
    };

    this.getNombre = function () {
        return this.nombre;
    };

    this.mover = function(direccion){
         switch (direccion){
             case 1: //izquierds
                 if (levelActual[this.posx-1][this.posy] === null && this.posx !== 0){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx-1][this.posy] = this;
                     this.posx = this.posx-1;
                     this.direccion = "UP";
                     //hacer el if de tpo de tanque...
                     this.image.src = "imagenes/tankU.fw.png";
                     break;}
                 else
                     break;
             case 2: //derecha
                 if (levelActual[this.posx+1][this.posy] === null && this.posx !== 25){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx+1][this.posy] = this;
                     this.posx = this.posx+1;
                     this.direccion = "DW";
                     //hacer el if de tpo de tanque...
                     this.image.src = "imagenes/tankD.fw.png";
                     break;}
                 else
                     break;
             case 3: //arriba
                 if (levelActual[this.posx][this.posy-1] === null && this.posy !== 0){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx][this.posy-1] = this;
                     this.posy = this.posy-1;
                     this.direccion = "LF";
                     //hacer el if de tpo de tanque...
                     this.image.src = "imagenes/tankL.fw.png";
                     break;}
                 else
                     break;
             case 4: //derecha
                 if (levelActual[this.posx][this.posy+1] === null && this.posy !== 25){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx][this.posy+1] = this;
                     this.posy = this.posy+1;
                     this.direccion = "RT";
                     //hacer el if de tpo de tanque...
                     this.image.src = "imagenes/tankR.fw.png";
                     break;}
                 else
                     break;
         }

    };

    this.fire = function(){
        //falta comprobacion de tipo de tanque...
        if (this.direccion === "LF"){
            canon = new Bill(this.posx,this.posy-1,"UP",0);
            levelActual[canon.posx][canon.posy] = canon;
        }
        else if (this.direccion === "RT"){
            canon = new Bill(this.posx,this.posy+1,"DW",0);
            levelActual[canon.posx][canon.posy] = canon;
        }
        else if (this.direccion === "DW"){
            canon = new Bill(this.posx+1,this.posy,"RT",0);
            levelActual[canon.posx][canon.posy] = canon;
        }
        else if (this.direccion === "UP"){
            canon = new Bill(this.posx-1,this.posy,"LF",0);
            levelActual[canon.posx][canon.posy] = canon;
        }
    }
}

