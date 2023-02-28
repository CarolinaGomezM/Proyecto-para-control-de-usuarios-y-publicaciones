const musuarios = document.querySelector("#musuarios");
const ausuarios = document.querySelector("#ausuarios");
const busuarios = document.querySelector("#busuarios");
const oposts = document.querySelector("#oposts");
const opost = document.querySelector("#opost");

var fadd = document.getElementById("fadd");
var secspost = document.getElementById("spost");
var secsposts = document.getElementById("sposts");
var shuser = document.getElementById("shuser");
var suser = document.getElementById("suser");
var tusuarios = document.getElementById("tusuarios");
var tpubli = document.getElementById("tpubli");

var tadd = document.getElementById("tadd");
var elementoP = document.getElementById("texto");
var elementoF = document.getElementById("textosearch");
var elementoA = document.getElementById("textoadd");

shuser.style.display = "none";
fadd.style.display = "none";
secspost.style.display = "none";
secsposts.style.display = "none";
suser.style.display = "none";
tusuarios.style.display = "none";
tpubli.style.display = "none";


musuarios.addEventListener("click", () => {
  shuser.style.display = "block";
  fadd.style.display = "none";
  secspost.style.display = "none";
  secsposts.style.display = "none";
  suser.style.display = "none";
  tusuarios.style.display = "block";
  tpubli.style.display = "none";
});

opost.addEventListener("click", () => {
  shuser.style.display = "none";
  fadd.style.display = "none";
  secspost.style.display = "block";
  secsposts.style.display = "none";
  suser.style.display = "none";
  tusuarios.style.display = "none";
  tpubli.style.display = "block";
  elementoP.style.display = "none";
});

oposts.addEventListener("click", () => {
  shuser.style.display = "none";
  fadd.style.display = "none";
  secspost.style.display = "none";
  secsposts.style.display = "block";
  suser.style.display = "none";
  tusuarios.style.display = "none";
  tpubli.style.display = "block";


var Usuario = new Usuarios();
  var select = document.getElementById("selectposts");



  for (let i = 0; i < Usuario.datos.length; i++) {
    let option = document.createElement("option");
    option.value = Usuario.datos[i].id;
    option.text = Usuario.datos[i].name;
    select.add(option);
  }



  select.addEventListener("change", () => {

    var publicacion = new Publicaciones();
    let buttonpubli = document.getElementById("buttonpubli");

    

    buttonpubli.addEventListener("click", () => {
      if (select.value == undefined) {
        select.value = 1;
      }
  

      let usuariob = select.value;
      ob = publicacion.pubusuario(usuariob);

      const objeto = JSON.parse(JSON.stringify(ob));

      const tabla = document.getElementById("tablep");

      const descendientes = tabla.querySelectorAll("*");

      descendientes.forEach((descendiente) => {
        descendiente.remove();
      });

      // Encabezado de la tabla
      const encabezadoFila = tabla.insertRow();
      const encabezadoNombreCelda = encabezadoFila.insertCell();
      encabezadoNombreCelda.innerText = "Title";
      const encabezadoPrecioCelda = encabezadoFila.insertCell();
      encabezadoPrecioCelda.innerText = "Body";



      ob.forEach((ob) => {
        const fila = tabla.insertRow();
        const nombreCelda = fila.insertCell();
        nombreCelda.innerText = ob.title;
        const precioCelda = fila.insertCell();
        precioCelda.innerText = ob.body;
      });

       
      if(secsposts !== undefined && secspost !== null){
        secsposts.appendChild(tabla);
      }
      
    });
  });
  var id = $("#selectposts").val();

});




ausuarios.addEventListener("click", () => {
  
  shuser.style.display = "none";
  fadd.style.display = "block";
  secspost.style.display = "none";
  secsposts.style.display = "none";
  suser.style.display = "none";
  tusuarios.style.display = "block";
  tpubli.style.display = "none";
  elementoA.style.display = "none";
  
  

  document.getElementById("name").disabled = false;
  document.getElementById("username").disabled = false;
  document.getElementById("email").disabled = false;
  document.getElementById("street").disabled = false;
  document.getElementById("suite").disabled = false;
  document.getElementById("city").disabled = false;
  document.getElementById("zipcode").disabled = false;
  document.getElementById("lat").disabled = false;
  document.getElementById("ing").disabled = false;
  document.getElementById("phone").disabled = false;
  document.getElementById("website").disabled = false;
  document.getElementById("namec").disabled = false;
  document.getElementById("cathprase").disabled = false;
  document.getElementById("bs").disabled = false;
  document.getElementById("buttonadd").disabled = false;

  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("street").value = "";
  document.getElementById("suite").value = "";
  document.getElementById("city").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("lat").value = "";
  document.getElementById("ing").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("website").value = "";
  document.getElementById("namec").value = "";
  document.getElementById("cathprase").value = "";
  document.getElementById("bs").value = "";
});

busuarios.addEventListener("click", () => {
 shuser.style.display = "none";
  fadd.style.display = "none";
  secspost.style.display = "none";
  secsposts.style.display = "none";
  suser.style.display = "block";
  tusuarios.style.display = "block";
  tpubli.style.display = "none"; 
  elementoF.style.display = "none";
});

// FUNCIONES DE FORMULARIO


var Usuario = new Usuarios();
$("#usuariostable").append(Usuario.listar());

let button = document.getElementById("buttonadd");

button.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let street = document.getElementById("street").value;
  let suite = document.getElementById("suite").value;
  let city = document.getElementById("city").value;
  let zipcode = document.getElementById("zipcode").value;
  let lat = document.getElementById("lat").value;
  let ing = document.getElementById("ing").value;
  let phone = document.getElementById("phone").value;
  let website = document.getElementById("website").value;
  let namec = document.getElementById("namec").value;
  let cathprase = document.getElementById("cathprase").value;
  let bs = document.getElementById("bs").value;


  const form = document.getElementById('miform');
  const inputs = form.querySelectorAll('input');

  let vacios = false;
  let vaciosreq = false;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
      vacios = true;
      break;
    }
    if (inputs[i].validity.typeMismatch) {
      vaciosreq = true;
      break;
    } else {
      vaciosreq = false;
       
    }
  }

  if(vacios || vaciosreq){
     if(vacios){
      elementoA.innerHTML =
      "Ha dejado campos vacíos.";
    elementoA.style.display = "block";
     }
    else if(vaciosreq){
      elementoA.innerHTML =
      "No ha escrito correctamente los datos.";
    elementoA.style.display = "block";
     }
  }else{

    elementoA.style.display = "none";

  let length = usuarios[usuarios.length - 1].id + 1;
  var datos = {
    id: length,
    name: name,
    username: username,
    email: email,
    address: {
      street: street,
      suite: suite,
      city: city,
      zipcode: zipcode,
      geo: {
        lat: lat,
        lng: ing,
      },
    },
    phone: phone,
    website: website,
    company: {
      name: namec,
      catchPhrase: cathprase,
      bs: bs,
    },
  };

  Usuario.agregarnuevousuario(datos);
  $("#usuariostable").empty();
  $("#usuariostable").append(
    "<tr><th>Name</th><th>Username</th><th>Email</th><th>Street</th><th>Suit</th><th>City</th><th>Zipcode</th><th>Lat</th><th>Lng</th><th>Phone</th><th>Website</th><th>Company Name</th><th>Catch Phrase</th><th>Bs</th></tr>"
  );
  $("#usuariostable").append(Usuario.listar());
}});

let buttonsearch = document.getElementById("buttonsearch");
var elementoF = document.getElementById("textosearch");


elementoP.style.display = "none";

buttonsearch.addEventListener("click", () => {
  elementoF.style.display = "none";

  let usernamesearch = document.getElementById("buscaruser").value;

  let res = Usuario.buscar(usernamesearch);



  if(res == null){
    elementoF.innerHTML =
    "Ha seleccionado un usuario no existente, intente con otro porfavor.";
  elementoF.style.display = "block";

  }else{
    elementoF.style.display = "none";
    fadd.style.display = "block"; 

  document.getElementById("name").value = res.name;
  document.getElementById("username").value = res.username;
  document.getElementById("email").value = res.email;
  document.getElementById("street").value = res.address.street;
  document.getElementById("suite").value = res.address.suite;
  document.getElementById("city").value = res.address.city;
  document.getElementById("zipcode").value = res.address.zipcode;
  document.getElementById("lat").value = res.address.geo.lat;
  document.getElementById("ing").value = res.address.geo.lng;
  document.getElementById("phone").value = res.phone;
  document.getElementById("website").value = res.website;
  document.getElementById("namec").value = res.company.name;
  document.getElementById("cathprase").value = res.company.catchPhrase;
  document.getElementById("bs").value = res.company.bs;

  document.getElementById("name").disabled = true;
  document.getElementById("username").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("street").disabled = true;
  document.getElementById("suite").disabled = true;
  document.getElementById("city").disabled = true;
  document.getElementById("zipcode").disabled = true;
  document.getElementById("lat").disabled = true;
  document.getElementById("ing").disabled = true;
  document.getElementById("phone").disabled = true;
  document.getElementById("website").disabled = true;
  document.getElementById("namec").disabled = true;
  document.getElementById("cathprase").disabled = true;
  document.getElementById("bs").disabled = true;
  document.getElementById("buttonadd").disabled = true;
}});

var publicacion = new Publicaciones();

var elementoP = document.getElementById("texto");

elementoP.style.display = "none";


let buttonpu = document.getElementById("buttonpu");

buttonpu.addEventListener("click", () => {
  let publi = document.getElementById("buscarpublicacion").value;
  let ob = publicacion.buscarpublicacion(publi);

  if (ob == null) {
    elementoP.innerHTML =
      "Ha seleccionado un id no existente, intente con otro porfavor.";
    elementoP.style.display = "block";
  } else {
    elementoP.style.display = "none";
    const objeto = JSON.parse(JSON.stringify(ob));

    const tabla = document.getElementById("tableonlypu");

    const descendientes = tabla.querySelectorAll("*");

    descendientes.forEach((descendiente) => {
      descendiente.remove();
    });

    // Encabezado de la tabla
    const encabezadoFila = tabla.insertRow();
    const encabezadoNombreCelda = encabezadoFila.insertCell();
    encabezadoNombreCelda.innerText = "Title";
    const encabezadoPrecioCelda = encabezadoFila.insertCell();
    encabezadoPrecioCelda.innerText = "Body";


    const fila = tabla.insertRow();
    const nombreCelda = fila.insertCell();
    nombreCelda.innerText = ob.title;
    const precioCelda = fila.insertCell();
    precioCelda.innerText = ob.body;

    if(secspost !== undefined && secspost !== null){
      secspost.appendChild(tabla);
    }
    
  }
});

$(document).ready(function () {});
