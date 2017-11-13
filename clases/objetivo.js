
//constructor de objetos de tipo Igol (aguila pronunciada en ingles... XD) que recibe la posicion en x, y y el tipo de objetivo
function Igol(posx,posy,tipo) {
    this.posx = posx;
    this.posy = posy;
    //estado que indica si la aguila ha sido impactada por alguna bala del tanque principal o no...
    this.estado = "intacto";
    //this.image = new Image();

    //hay 2
    if (tipo === 1) {// aguila tipo 1: gris
        this.tipo = 1;
        this.image = new Image();
        this.image.src = "imagenes/igol.fw.png";
        this.nombre = "aguila";
    }
    else if (tipo === 2) {// aguila tipo 2: blanca
        this.tipo = 2;
        this.image = new Image();
        this.image.src = "imagenes/falcon.fw.png";
        this.nombre = "gavilan";
    }
    //funcion que cambia el estado
    this.conectado = function () {
        this.estado = "wasted";
        this.image = new Image();
        this.image.src = "imagenes/igolDW.fw.png";
    };

    this.getNombre = function () {
        return this.nombre;
    }
}