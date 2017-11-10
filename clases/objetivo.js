

function Igol(posx,posy,tipo) {
    this.posx = posx;
    this.posy = posy;
    this.estado = "intacto";
    //this.image = new Image();


    if (tipo === 1) {// bloque tipo 1: ladrisho
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/igol.fw.png";
        this.nombre = "aguila";
    }
    else if (tipo === 2) {// bloque tipo 2: metal
        this.tipo = 2;
        this.image = new Image();
        this.image.src = "imagenes/falcon.fw.png";
        this.nombre = "gavilan";
    }

    this.conectado = function () {
        this.estado = "wasted";
        this.image = new Image();
        this.image.src = "imagenes/igolDW.fw.png";
    };

    this.getNombre = function () {
        return this.nombre;
    }
}