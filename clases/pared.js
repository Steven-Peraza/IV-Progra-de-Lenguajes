
function Muro(posx,posy,ancho,alto,tipo) {
    this.gamearea = myGameArea;
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;

    if (tipo === 0) {// tanque tipo 1: el principal
        this.tipo = 0;
        this.image = new Image();
        this.image.src = "imagenes/steel.png";
    }
    else if (tipo === 1) {// tanque tipo 2: enemigo inutil
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/brick.png";
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

    this.break = function(){

    }
}