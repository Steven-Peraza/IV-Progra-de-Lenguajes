

function Igol(posx,posy) {
    this.posx = posx;
    this.posy = posy;
    this.estado = "intacto";
    this.image = new Image();
    this.image.src = "imagenes/igol.fw.png";
    this.nombre = "aguila";

    this.conectado = function () {
        this.estado = "wasted";
        this.image.src = "imagenes/igolDW.fw.png";
        levelActual[this.posx][this.posy] = null;
    };

    this.getNombre = function () {
        return this.nombre;
    }
}