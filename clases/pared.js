//constructor de objetos de tipo Bloque
function Muro(posx,posy,ancho,alto,tipo) {
    this.gamearea = myGameArea;
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;

    if (tipo === 1) {// bloque tipo 1: ladrisho
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/brick.png";
        this.nombre = "ladrillo";
    }
    else if (tipo === 2) {// bloque tipo 2: metal
        this.tipo = 2;
        this.image = new Image();
        this.image.src = "imagenes/steel.png";
        this.nombre = "ragnite";
    }
    else if (tipo === 3) {// bloque tipo 3: agua
        this.tipo = 3;
        this.image = new Image();
        this.image.src = "imagenes/water.png";
        this.nombre = "border";
    }
    //funcion que destruye los muros
    this.break = function(){
        levelActual[this.posx][this.posy] = null;
    };

    this.getNombre = function () {
        return this.nombre;
    }
}