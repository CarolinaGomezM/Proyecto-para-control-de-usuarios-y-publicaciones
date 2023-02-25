           class Usuarios{
                constructor(){
                    this.datos = usuarios;
                    console.log(usuarios);

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
                        else{
                            return null;
                        }
                    }
                }

                listar(){
                   let  res = "";

                    $.each(this.datos, (indice,p) => {
                    res += `<tr><td>${p.name}</td><td>${p.username}</td><td>${p.email}</td><td>${p.address.street}</td><td>${p.address.suite}</td><td>${p.address.city}</td><td>${p.address.zipcode}</td><td>${p.address.geo.lat}</td><td>${p.address.geo.lng}</td><td>${p.phone}</td><td>${p.website}</td><td>${p.company.name}</td><td>${p.company.catchPhrase}</td><td>${p.company.bs}</td></tr>`;
                    });
                        return res;
                    

                }

                listarusername(username){
                    let  res = "";
                    i=0;
                    $.each(this.datos, (indice,p) => {
                        i++;
                    res += `<tr><td>${p.name}</td><td>${p.username}</td><td>${p.email}</td><td>${p.address.street}</td><td>${p.address.suite}</td><td>${p.address.city}</td><td>${p.address.zipcode}</td><td>${p.address.geo.lat}</td><td>${p.address.geo.lng}</td><td>${p.phone}</td><td>${p.website}</td><td>${p.company.name}</td><td>${p.company.catchPhrase}</td><td>${p.company.bs}</td></tr>`;
                    });
                        return i;
                }

            }

          /*  let usuariosa = [usuarios];
            //const variable = new usuariosClass();
            //variable.agregarnuevousuario();

            console.log(usuariosa);
        

            var mostrar;

            console.log(usuarios.length);

            console.log(Object.values(usuarios));

            for(let i=0; i<usuarios.length; i++){
             //    mostrar += "nombre " + usuarios[i].name+ " ";
               console.log(usuarios[i].name);  
            }

           // document.write(mostrar);
           console.log(usuarios[usuarios.length-1].id);
           console.log(usuarios[usuarios.length-1].id+1);

           */

          




