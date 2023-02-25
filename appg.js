var Usuario = new Usuarios();
$('#usuariostable').append(Usuario.listar());


let button = document.getElementById('buttonadd');

button.addEventListener('click', () => {

let  name = document.getElementById('name').value;
let  username = document.getElementById('username').value;
let  email = document.getElementById('email').value;
let  street = document.getElementById('street').value;
let  suite = document.getElementById('suite').value;
let  city = document.getElementById('city').value;
let  zipcode = document.getElementById('zipcode').value;
let  lat = document.getElementById('lat').value;
let  ing = document.getElementById('ing').value;
let  phone = document.getElementById('phone').value;
let  website = document.getElementById('website').value;
let  namec = document.getElementById('namec').value;
let  cathprase = document.getElementById('cathprase').value;
let  bs = document.getElementById('bs').value;

let length = usuarios[usuarios.length-1].id+1;
         var datos = 
             {   
                     "id": length,
                     "name": name,
                     "username": username,
                     "email": email,
                     "address": {
                     "street": street,
                     "suite": suite,
                     "city": city,
                     "zipcode": zipcode,
                     "geo": {
                     "lat": lat,
                     "lng": ing
                     }
                     },
                     "phone": phone,
                     "website": website,
                     "company": {
                     "name": namec,
                     "cathPrase": cathprase,
                     "bs": bs
                     }
             }

        
          Usuario.agregarnuevousuario(datos);
          $('#usuariostable').empty();
          $('#tabla_usuarios').append("<tr><th>Name</th><th>Username</th><th>Email</th><th>Street</th><th>Suit</th><th>City</th><th>Zipcode</th><th>Lat</th><th>Lng</th><th>Phone</th><th>Website</th><th>Company Name</th><th>Catch Phrase</th><th>Bs</th></tr>");
         $('#usuariostable').append(Usuario.listar());
          console.log(usuarios);


})

let buttonsearch = document.getElementById('buttonsearch');

buttonsearch.addEventListener('click', () => {

let  usernamesearch = document.getElementById('buscaruser').value;

let res = Usuario.buscar(usernamesearch);

document.getElementById('name').value = res.name;
document.getElementById('username').value = res.username;
document.getElementById('email').value = res.email;
document.getElementById('street').value = res.address.street;
document.getElementById('suite').value = res.address.suite;
document.getElementById('city').value = res.address.city;
document.getElementById('zipcode').value = res.address.zipcode;
document.getElementById('lat').value = res.address.geo.lat;
document.getElementById('ing').value = res.address.geo.lng;
document.getElementById('phone').value = res.phone;
document.getElementById('website').value = res.website;
document.getElementById('namec').value = res.company.name;
document.getElementById('cathprase').value = res.company.catchPhrase;
document.getElementById('bs').value = res.company.bs;




})




let  buttonpu = document.getElementById('buttonpu');

buttonpu.addEventListener('click', () => {

let  publi = document.getElementById('buscarpublicacion').value;
console.log(publicacion.buscarpublicacion(publi));
})


$(document).ready(function(){
var select = document.getElementById("selectposts");

for (let i = 0; i < Usuario.datos.length; i++) {
let option = document.createElement("option");
option.value = Usuario.datos[i].id;
option.text = Usuario.datos[i].name;
select.add(option);
}

select.addEventListener('change',() =>{
var publicacion = new Publicaciones();
let  buttonpubli = document.getElementById('buttonpubli');

buttonpubli.addEventListener('click', () => {

let  usuariob = select.value;
ob = publicacion.pubusuario(usuariob);

const objeto = JSON.parse(JSON.stringify(ob));

const tabla = document.getElementById("tablep");

const descendientes = tabla.querySelectorAll("*");

descendientes.forEach(descendiente => {
    descendiente.remove();
  });

// Encabezado de la tabla
const encabezadoFila = tabla.insertRow();
const encabezadoIdCelda = encabezadoFila.insertCell();
encabezadoIdCelda.innerText = "UserId";
const encabezadoNombreCelda = encabezadoFila.insertCell();
encabezadoNombreCelda.innerText = "Title";
const encabezadoPrecioCelda = encabezadoFila.insertCell();
encabezadoPrecioCelda.innerText = "Body";

console.log(ob);


ob.forEach(ob => {
const fila = tabla.insertRow();
const idCelda = fila.insertCell();
idCelda.innerText = ob.userId;
const nombreCelda = fila.insertCell();
nombreCelda.innerText = ob.title;
const precioCelda = fila.insertCell();
precioCelda.innerText = ob.body;
});

document.body.appendChild(tabla);
})


})
var id = $('#selectposts').val(); 

console.log(id);
})