class Publicaciones{
    constructor(){
        this.publicaciones = posts;
    }


    pubusuario(id){
        var publi = []; 
        console.log(id);
        for(let i = 0; i<this.publicaciones.length;i++){
            if(this.publicaciones[i].userId == id){
                publi.push(this.publicaciones[i]);
            }

        }
        return publi;
    }

    buscarpublicacion(id){
        for(let i=0; i<this.publicaciones.length; i++){
            if(this.publicaciones[i].id == id){
                return this.publicaciones[i];
            }
        }
    }
}