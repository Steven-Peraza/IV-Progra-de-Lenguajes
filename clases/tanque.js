

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
        this.nombre = "principal";
        this.direccion = "UP";
    }
    else if (tipo === 1) {// tanque tipo 2: enemigo inutil
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/inutilD.fw.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 1;
        this.nombre = "inutil";
        this.direccion = "DW";
    }
    else if (tipo === 2) {// tanque tipo 3: enemigo tanque tanque
        this.tipo = 2;
        this.image = new Image();
        this.image.src = "imagenes/tigerD.fw.png";
        this.speedX = 1;
        this.speedY = 1;
        this.life = 3;
        this.nombre = "tanque";
        this.direccion = "DW";
    }
    else if (tipo === 3) {// tanque tipo 4: enemigo bala rapida
        this.tipo = 3;
        this.image = new Image();
        this.image.src = "imagenes/fastD.fw.png";
        this.speedX = 3;
        this.speedY = 3;
        this.life = 2;
        this.nombre = "rapido";
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
                     if (this.nombre === "principal")
                        this.image.src = "imagenes/tankU.fw.png";
                     else if (this.nombre === "inutil")
                         this.image.src = "imagenes/inutilU.fw.png";
                     else if (this.nombre === "tanque")
                         this.image.src = "imagenes/tigerU.fw.png";
                     else if (this.nombre === "rapido")
                         this.image.src = "imagenes/fastU.fw.png";
                     break;}
                 else
                     break;
             case 2: //derecha
                 if (levelActual[this.posx+1][this.posy] === null && this.posx !== 25){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx+1][this.posy] = this;
                     this.posx = this.posx+1;
                     this.direccion = "DW";
                     if (this.nombre === "principal")
                         this.image.src = "imagenes/tankD.fw.png";
                     else if (this.nombre === "inutl")
                         this.image.src = "imagenes/inutilD.fw.png";
                     else if (this.nombre === "tanque")
                         this.image.src = "imagenes/tigerD.fw.png";
                     else if (this.nombre === "rapido")
                         this.image.src = "imagenes/fastD.fw.png";
                     break;}
                 else
                     break;
             case 3: //arriba
                 if (levelActual[this.posx][this.posy-1] === null && this.posy !== 0){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx][this.posy-1] = this;
                     this.posy = this.posy-1;
                     this.direccion = "LF";
                     if (this.nombre === "principal")
                         this.image.src = "imagenes/tankL.fw.png";
                     else if (this.nombre === "inutil")
                         this.image.src = "imagenes/inutilL.fw.png";
                     else if (this.nombre === "tanque")
                         this.image.src = "imagenes/tigerL.fw.png";
                     else if (this.nombre === "rapido")
                         this.image.src = "imagenes/fastL.fw.png";
                     break;}
                 else
                     break;
             case 4: //derecha
                 if (levelActual[this.posx][this.posy+1] === null && this.posy !== 25){
                     levelActual[this.posx][this.posy] = null;
                     levelActual[this.posx][this.posy+1] = this;
                     this.posy = this.posy+1;
                     this.direccion = "RT";
                     if (this.nombre === "principal")
                         this.image.src = "imagenes/tankR.fw.png";
                     else if (this.nombre === "inutil")
                         this.image.src = "imagenes/inutilR.fw.png";
                     else if (this.nombre === "tanque")
                         this.image.src = "imagenes/tigerR.fw.png";
                     else if (this.nombre === "rapido")
                         this.image.src = "imagenes/fastR.fw.png";
                     break;}
                 else
                     break;
         }

    };

    this.fire = function(){
        if (this.direccion === "LF"){
            if (this.nombre === "principal"){
                canon = new Bill(this.posx,this.posy-1,"UP",0);
                levelActual[canon.posx][canon.posy] = canon;}
                //canon.moverB();}
            else if (this.nombre === "rapido"){
                canon = new Bill(this.posx,this.posy-1,"UP",2);
                levelActual[canon.posx][canon.posy] = canon;}
            else{
                canon = new Bill(this.posx,this.posy-1,"UP",1);
                levelActual[canon.posx][canon.posy] = canon;
            }
        }
        else if (this.direccion === "RT"){
            if (this.nombre === "principal"){
                canon = new Bill(this.posx,this.posy+1,"DW",0);
                levelActual[canon.posx][canon.posy] = canon;}
                //canon.moverB();}
            else if (this.nombre === "rapido"){
                canon = new Bill(this.posx,this.posy+1,"DW",2);
                levelActual[canon.posx][canon.posy] = canon;}
            else{
                canon = new Bill(this.posx,this.posy+1,"DW",1);
                levelActual[canon.posx][canon.posy] = canon;}
        }
        else if (this.direccion === "DW"){
            if (this.nombre === "principal"){
                canon = new Bill(this.posx+1,this.posy,"RT",0);
                levelActual[canon.posx][canon.posy] = canon;}
                //canon.moverB();}
            else if (this.nombre === "rapido"){
                canon = new Bill(this.posx+1,this.posy,"RT",2);
                levelActual[canon.posx][canon.posy] = canon;}
            else{
                canon = new Bill(this.posx+1,this.posy,"RT",1);
                levelActual[canon.posx][canon.posy] = canon;}
        }
        else if (this.direccion === "UP"){
            if (this.nombre === "principal"){
                canon = new Bill(this.posx-1,this.posy,"LF",0);
                levelActual[canon.posx][canon.posy] = canon;}
                //canon.moverB();}
            else if (this.nombre === "rapido"){
                canon = new Bill(this.posx-1,this.posy,"LF",2);
                levelActual[canon.posx][canon.posy] = canon;}
            else{
                canon = new Bill(this.posx-1,this.posy,"LF",1);
                levelActual[canon.posx][canon.posy] = canon;}
        }
    }
}

