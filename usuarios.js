           class Usuarios{
                constructor(){
                    this.datos = usuarios;

                }

                agregarnuevousuario(nuevo)
                {
                        this.datos.push(nuevo);
                }
                
                buscar(username){

                    for(let i=0; i<this.datos.length; i++){
                        if(this.datos[i].username == username){
                            return this.datos[i];
                        }
                        
                    }
                    return null;
                }

                listar(){
                   let  res = "";

                    $.each(this.datos, (indice,p) => {
                    res += `<tr><td>${p.name}</td><td>${p.username}</td><td>${p.email}</td><td>${p.address.street}</td><td>${p.address.suite}</td><td>${p.address.city}</td><td>${p.address.zipcode}</td><td>${p.address.geo.lat}</td><td>${p.address.geo.lng}</td><td>${p.phone}</td><td>${p.website}</td><td>${p.company.name}</td><td>${p.company.catchPhrase}</td><td>${p.company.bs}</td></tr>`;
                    });
                        return res;
                    

                }

                listarusername(ob){
                    let  res = "";
                    res += `<tr><td>${ob.name}</td><td>${ob.username}</td><td>${ob.email}</td><td>${ob.address.street}</td><td>${ob.address.suite}</td><td>${ob.address.city}</td><td>${ob.address.zipcode}</td><td>${ob.address.geo.lat}</td><td>${ob.address.geo.lng}</td><td>${ob.phone}</td><td>${ob.website}</td><td>${ob.company.name}</td><td>${ob.company.catchPhrase}</td><td>${ob.company.bs}</td></tr>`;
                        return res;
                }

            }

    

          




