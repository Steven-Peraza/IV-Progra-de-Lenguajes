


function Billy(posx,posy,direccion,tipo) {
    this.posx = posx;
    this.posy = posy;
    this.direccion = direccion;

    if (tipo === 0) {// bala tipo 1: el principal
        this.tipo = 0;
        this.speed = 5;
    }
    else if (tipo === 1) {// tanque tipo 2: enemigos inutil y tanque tanque
        this.tipo = 1;
        this.speed = 3;
    }
    else if (tipo === 2) {// tanque tipo 3: enemigo bala rapida
        this.tipo = 2;
        this.speed = 7;
    }

    this.movement = function () {

    }
}