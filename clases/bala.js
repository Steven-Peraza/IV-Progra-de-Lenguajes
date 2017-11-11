


function Bill(posx,posy,direccion,tipo) {
    this.posx = posx;
    this.posy = posy;
    this.direccion = direccion;
    this.nombre = "bill";
    this.image = new Image();
    this.die = false;

    if (tipo === 0) {// bala tipo 0: el principal
        this.tipo = 0;
        this.speed = 5;
    }
    else if (tipo === 1) {// tanque tipo 1: enemigos inutil y tanque tanque
        this.tipo = 1;
        this.speed = 3;
    }
    else if (tipo === 2) {// tanque tipo 2: enemigo bala rapida
        this.tipo = 2;
        this.speed = 7;
    }

    if (direccion === "UP"){
            this.image.src = "imagenes/billL.fw.png";
    }
    else if (direccion === "LF"){
            this.image.src = "imagenes/billU.fw.png";
    }
    else if (direccion === "RT"){
            this.image.src = "imagenes/billD.fw.png";
    }
    else if (direccion === "DW"){
            this.image.src = "imagenes/billR.fw.png";
    }


    this.headshot = function () {
        if ((levelActual[this.posx][this.posy].getNombre() === "inutil" || levelActual[this.posx][this.posy].getNombre() === "rapido" || levelActual[this.posx][this.posy].getNombre() === "tanque" ||levelActual[this.posx][this.posy].getNombre() === "principal")){
            if (levelActual[this.posx][this.posy].life > 0){
                levelActual[this.posx][this.posy].hit();
                audiohit.pause();
                audiohit.currentTime = 0;
                audiohit.play();
            }
            else{
                levelActual[this.posx][this.posy].hit();
                audioBay.pause();
                audioBay.currentTime = 0;
                audioBay.play();
            }
            }

        else if ((levelActual[this.posx][this.posy].getNombre() === "ladrillo")){
            levelActual[this.posx][this.posy].break();
            audiobrick.pause();
            audiobrick.currentTime = 0;
            audiobrick.play();}

        else if ((levelActual[this.posx][this.posy].getNombre() === "aguila" || levelActual[this.posx][this.posy].getNombre() === "gavilan") && this.tipo === 0){
            if (levelActual[this.posx][this.posy].estado !== "wasted"){
                levelActual[this.posx][this.posy].conectado();
                igolsLeft -=1;
                audioSlave.pause();
                audioSlave.currentTime = 0;
                audioSlave.play();}
            else
                levelActual[this.posx][this.posy].conectado();
        }
        else if ((levelActual[this.posx][this.posy].getNombre() === "ragnite") || (levelActual[this.posx][this.posy].getNombre() === "border")){
            audiosteel.pause();
            audiosteel.currentTime = 0;
            audiosteel.play();}
    };

    this.getNombre = function () {
        return this.nombre;
    };

    this.moverB = function(){
            if (this.direccion === "LF") {//izquierds
                if (levelActual[this.posx - 1][this.posy] === null && this.posx !== 1 && this.die === false) {
                    //{
                        levelActual[this.posx][this.posy] = null;
                        levelActual[this.posx - 1][this.posy] = this;
                        this.posx = this.posx - 1;
                } else {
                    this.posx = this.posx - 1;
                    this.headshot();
                    this.posx = this.posx + 1;
                    levelActual[this.posx][this.posy] = null;
                    this.die = true;
                    //clearInterval(timer2);
                }
            } else if (this.direccion === "RT") {//derecha
                if (levelActual[this.posx + 1][this.posy] === null && this.posx !== 24 && this.die === false) {
                    {
                        levelActual[this.posx][this.posy] = null;
                        levelActual[this.posx + 1][this.posy] = this;
                        this.posx = this.posx + 1;
                    }
                } else {
                    this.posx = this.posx + 1;
                    this.headshot();
                    this.posx = this.posx - 1;
                    levelActual[this.posx][this.posy] = null;
                    this.die = true;
                    //clearInterval(timer2);
                }
            } else if (this.direccion === "UP") {//arriba
                if (levelActual[this.posx][this.posy - 1] === null && this.posy !== 1 && this.die === false) {
                    {
                        levelActual[this.posx][this.posy] = null;
                        levelActual[this.posx][this.posy - 1] = this;
                        this.posy = this.posy - 1;
                    }
                }
                else {
                    this.posy = this.posy - 1;
                    this.headshot();
                    this.posy = this.posy + 1;
                    levelActual[this.posx][this.posy] = null;
                    this.die = true;
                    //clearInterval(timer2);
                }
            } else if (this.direccion === "DW") {//derecha
                if (levelActual[this.posx][this.posy + 1] === null && this.posy !== 24 && this.die === false) {
                    {
                        levelActual[this.posx][this.posy] = null;
                        levelActual[this.posx][this.posy + 1] = this;
                        this.posy = this.posy + 1;
                    }
                } else {
                    this.posy = this.posy + 1;
                    this.headshot();
                    this.posy = this.posy - 1;
                    levelActual[this.posx][this.posy] = null;
                    this.die = true;
                    //clearInterval(timer2);

                }
            }

    }
}