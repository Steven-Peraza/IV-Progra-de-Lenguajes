


function Bill(posx,posy,direccion,tipo) {
    this.posx = posx;
    this.posy = posy;
    this.direccion = direccion;
    this.nombre = "bill";
    this.image = new Image();

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
        //ver la colision y comparar el tipo de objeto con el que se pego...
    };

    this.getNombre = function () {
        return this.nombre;
    }
}