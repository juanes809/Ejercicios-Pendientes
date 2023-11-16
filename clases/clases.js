class Libro{
    constructor(pTitulo, pAutor, pGenero, pLeido){
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.genero = pGenero;
        this.leido = pLeido;
    }


    marcarComoLeido(){

        this.leido=true
        console.log("Libro leido")
        return this.leido

    }
    
    marcarComoNoLeido(){
        this.leido=false
        console.log("Libro no leido")
        return this.leido
    }

    informacion(){
        if ( this.leido==true){

        console.log("Título:" +[this.titulo]+ "\n Autor:" +[this.autor]+ "\n Género:" +[this.genero]+ "\n Leído:" +[this.leido])
        }else{
            console.log("Título:" + [this.titulo]+  "\n Autor:" +[this.autor]+ "\n Género:" +[this.genero]+ "\n Leído:" +[this.leido])

        }
    }


}

const libro1= new Libro("La Odisea", "Homero", "Epopeya, Epico", false)
const libro2=new Libro("Pegote", "Albeiro Echevarria", "Ficcion,Misterio", false)

libro1.marcarComoLeido()
libro1.informacion()
libro2.informacion()