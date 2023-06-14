// Clientes base de datos inicial ---------------------------------------------
const clientes = new Map();
clientes.set("AndresAngarita1095834643", {
  id: "AndresAngarita1095834643",
  identificacion: "1095834643",
  nombres: "Andres",
  apellidos: "Angarita",
  telefono: 301278,
  email: "Andres@andres.com",
  fechaNacimiento: "10 agosto",
  nacionalidad: "Colombiano",
  puntos: "210",
});
clientes.set("CamiloBecerra10968643", {
  id: "CamiloBecerra10968643",
  identificacion: "10968643",
  nombres: "Camilo",
  apellidos: "Becerra",
  telefono: 310278,
  email: "Camilo@andres.com",
  fechaNacimiento: "10 enero",
  nacionalidad: "Americano",
  puntos: "5100",
});
clientes.set("DiegoFernandez91280", {
  id: "DiegoFernandez91280",
  identificacion: "91280",
  nombres: "Diego",
  apellidos: "Fernandez",
  telefono: 301278,
  email: "Diego@andres.com",
  fechaNacimiento: "1 junio",
  nacionalidad: "Mexicano",
  puntos: "1010",
});
//fin base de datos clientes

// Inicio Modulo clientes ----------------------------------------------------------------
const botonGuardarCliente = document.getElementById('botonGuardarCliente');
const botonMostrarClientes = document.getElementById('botonMostrarClientes');
const mostrarClientes = document.getElementById('mostrarClientes');
const formAgregarCliente = document.getElementById('formAgregarCliente');
const botonRegistrar = document.getElementById("botonRegistrar");
const botonOcultarFormCliente = document.getElementById("botonOcultarFormCliente");
const home = document.getElementById("home");



function cargaInicialclientes(){ //aca va la carga inicial de clientes
    for (const [clave, datos] of clientes) {
        mostrarClienteHtml(datos); //ACA IMPRIME DATOS EN LA TABLA
      }
      cargarBotonesEditar(); //cargamos inicialmetne los botones
      cargarBotonesEliminar();//cargar botones eliminar
      cargarBotonesInciarVenta();//cargar botones
}

function mostrarClienteHtml(cliente) {//metodo que nos sirve para insertar clientes a la tabla del html
    const insertarCliente = document.getElementById("insertarCliente");
    let tr = document.createElement("tr");
    tr.setAttribute(
      "id",
      cliente.nombres + cliente.apellidos + cliente.identificacion
    );
  
    let thIdentificacion = document.createElement("th");
    thIdentificacion.textContent = cliente.identificacion;
  
    let tdNombres = document.createElement("td");
    tdNombres.textContent = cliente.nombres;
  
    let tdApellidos = document.createElement("td");
    tdApellidos.textContent = cliente.apellidos;
  
    let tdTelefono = document.createElement("td");
    tdTelefono.textContent = cliente.telefono;
  
    let tdEmail = document.createElement("td");
    tdEmail.textContent = cliente.email;
  
    let tdFechaNacimiento = document.createElement("td");
    tdFechaNacimiento.textContent = cliente.fechaNacimiento;
  
    let tdNacionalidad = document.createElement("td");
    tdNacionalidad.textContent = cliente.nacionalidad;
  
    let tdBotones = document.createElement("td");
    let divBotones = document.createElement("div");
    divBotones.setAttribute("class", "btn-group");
    divBotones.setAttribute("role", "group");
    divBotones.setAttribute("aria-label", "Basic mixed styles example");
  
    let botonEditar = document.createElement("button");
    botonEditar.setAttribute("class", "btn btn-success");
    botonEditar.textContent = "Editar";
    botonEditar.setAttribute("id", "botonEditarCliente");
    botonEditar.setAttribute(
      "value",
      cliente.nombres + cliente.apellidos + cliente.identificacion
    );
  
    let botonAuxiliar = document.createElement("button");
    botonAuxiliar.setAttribute("class", "btn btn-warning");
    botonAuxiliar.textContent = cliente.puntos;
    botonAuxiliar.setAttribute("style", "font-size: 15px;");
    botonAuxiliar.setAttribute("disabled", "true");
  
    let botonEliminar = document.createElement("button");
    botonEliminar.setAttribute("class", "btn btn-danger");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.setAttribute("id", "botonEliminarCliente");
    botonEliminar.setAttribute(
      "value",
      cliente.nombres + cliente.apellidos + cliente.identificacion
    );
  
    let thBotonVenta = document.createElement("th");
    //thBotonVenta.textContent = cliente.id;
  
    let botonVenta = document.createElement("button");
    botonVenta.setAttribute("value", cliente.id);
    botonVenta.setAttribute("class", "btn btn-success");
    botonVenta.setAttribute("id", "botonIniciarVenta");
  
    let svgVenta = document.createElement("svg");
    svgVenta.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgVenta.setAttribute("width", "16");
    svgVenta.setAttribute("height", "16");
    svgVenta.setAttribute("fill", "currentColor");
    svgVenta.setAttribute("class", "bi bi-bag-check-fill");
    svgVenta.setAttribute("viewBox", "0 0 16 16");
  
    let pathVenta = document.createElement("path");
    pathVenta.setAttribute("fill-rule", "evenodd");
    pathVenta.setAttribute(
      "d",
      "M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
    );
  
    svgVenta.appendChild(pathVenta);
    botonVenta.appendChild(svgVenta);
    thBotonVenta.appendChild(botonVenta);
  
    divBotones.appendChild(botonEditar);
    divBotones.appendChild(botonAuxiliar);
    divBotones.appendChild(botonEliminar);
  
    tdBotones.appendChild(divBotones);
  
    tr.appendChild(thBotonVenta);
    tr.appendChild(thIdentificacion);
    tr.appendChild(tdNombres);
    tr.appendChild(tdApellidos);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdEmail);
    tr.appendChild(tdFechaNacimiento);
    tr.appendChild(tdNacionalidad);
    tr.appendChild(tdBotones);
  
    insertarCliente.appendChild(tr);
  }
  cargaInicialclientes(); // inicializamos el documento con los clientes creados

  botonGuardarCliente.addEventListener('click', Agregar);
  
  function Agregar(Puntos){
    let PuntosEnv = 0;
    const Identificacion = document.getElementById('Identificacion').value;
    const Nombres = document.getElementById('Nombres').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const Email = document.getElementById('Email').value;
    const Telefono = document.getElementById('Telefono').value;
    const Nacionalidad = document.getElementById('Nacionalidad').value;
    const FechaNacimiento = document.getElementById('FechaNacimiento').value;
    const clave = Nombres+Apellidos+Identificacion;
    if (typeof Puntos == "string") {
        console.log(Puntos);
        PuntosEnv = Puntos;
      }
    clientes.set(clave, {
        id: clave,
        identificacion: Identificacion,
        nombres: Nombres,
        apellidos: Apellidos,
        telefono: Telefono,
        email: Email,
        fechaNacimiento: FechaNacimiento,
        nacionalidad: Nacionalidad,
        puntos: PuntosEnv,
    });
    console.log(clientes);
    mostrarClienteHtml(clientes.get(clave));
    document.getElementById("Identificacion").value = "";
    document.getElementById("Nombres").value = "";
    document.getElementById("Apellidos").value = "";
    document.getElementById("Telefono").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("FechaNacimiento").value = "";
    document.getElementById("Nacionalidad").value = "";

    formAgregarCliente.setAttribute(
        "class",
        "container-fluid mb-5  visually-hidden"
    );
    mostrarClientes.setAttribute("class", "container-fluid visually");
    cargarBotonesEliminar();
    cargarBotonesEditar();
    cargarBotonesInciarVenta();
  };


  botonMostrarClientes.addEventListener("click", function(event){
    event.preventDefault();
    //mostramos la tabla de clientes
    mostrarClientes.setAttribute("class", "container-fluid visually");
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
    tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
    mostrarVentas.setAttribute('class','container-fluid visually-hidden');
    home.setAttribute('class', 'container-fluid visually-hidden');
  });

  botonRegistrar.addEventListener("click", function(){
    document.getElementById("Identificacion").value = "";
    document.getElementById("Nombres").value = "";
    document.getElementById("Apellidos").value = "";
    document.getElementById("Telefono").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("FechaNacimiento").value = "";
    document.getElementById("Nacionalidad").value = "";
    //mostramos el formulario de agregar cliente
    formAgregarCliente.setAttribute(
        "class",
        "container-fluid mb-5  visually"
    );
    //ocultamos tabla
    mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
  });

  botonOcultarFormCliente.addEventListener('click', function(){
    //mostramos el formulario de agregar cliente
    formAgregarCliente.setAttribute(
        "class",
        "container-fluid mb-5  visually-hidden"
    );
    //ocultamos tabla
    mostrarClientes.setAttribute("class", "container-fluid visually");
  })


function cargarBotonesEditar() {
    const botonEditarCliente = document.querySelectorAll(
      "button#botonEditarCliente"
    );
    botonEditarCliente.forEach((element) => {
      //console.log("este es un elemento: " + element.value);
      element.addEventListener("click", function () {
        let clienteEditar = clientes.get(element.value);
        document.getElementById("Identificacion").value =clienteEditar.identificacion; //CARGAR DATOS A INPUTS
        document.getElementById("Nombres").value = clienteEditar.nombres; //CARGAR DATOS A INPUTS
        document.getElementById("Apellidos").value = clienteEditar.apellidos; //CARGAR DATOS A INPUTS
        document.getElementById("Telefono").value = clienteEditar.telefono; //CARGAR DATOS A INPUTS
        document.getElementById("Email").value = clienteEditar.email; //CARGAR DATOS A INPUTS
        document.getElementById("FechaNacimiento").value =
          clienteEditar.fechaNacimiento; //CARGAR DATOS A INPUTS
        document.getElementById("Nacionalidad").value =
          clienteEditar.nacionalidad; //CARGAR DATOS A INPUTS
        //botonGuardarCliente.setAttribute('value','Edicion');
        //console.log("Esto es del boton Editar " + element.value);
        formAgregarCliente.setAttribute(
          "class",
          "container-fluid mb-5  visually"
        ); //MOSTRAMOS EL FORMULARIO
        mostrarClientes.setAttribute("class", "container-fluid visually-hidden"); //OCULTAMOS LA TABLA
        document.getElementById("mostrarBotonEliminar").setAttribute("class", "col-6 visually-hidden"); //CAMBIAMOS LOS BOTONES DEL FORM
        document.getElementById("mostrarBotonEditar").setAttribute("class", "col-6 visually"); //CAMBIAMOS LOS BOTONES DEL FORM
        let clave1 =
          clienteEditar.nombres +
          clienteEditar.apellidos +
          clienteEditar.identificacion;
        botonEditarClienteForm.setAttribute("value", clave1); //ASIGNAMOS EL VALOR AL BOTON DE CLAVE
        cargarBotonEdicion(); //CARGAMOS EL EVENTO DEL BOTON
      });
    });
  }


function cargarBotonEdicion() { // inicializa los botones de editar con la base de datos creada primero
    botonEditarClienteForm.addEventListener("click", actualizarClientes); //CREAR EVENTO BOTON EDITAR ACTUALIZANDOLO
  }
  
function actualizarClientes() {
const claveAntigua = botonEditarClienteForm.value;
//console.log("Entro a editar cliente",clave1);
const Identificacion = document.getElementById("Identificacion").value;
const Nombres = document.getElementById("Nombres").value;
const Apellidos = document.getElementById("Apellidos").value;
const Telefono = document.getElementById("Telefono").value;
const Email = document.getElementById("Email").value;
const FechaNacimiento = document.getElementById("FechaNacimiento").value;
const Nacionalidad = document.getElementById("Nacionalidad").value;
const claveNueva = Nombres + Apellidos + Identificacion;
if (clientes.get(claveNueva)) {
    //console.log("Si existe la clave");
    clientes.get(claveNueva).telefono = Telefono; //Editamos
    clientes.get(claveNueva).email = Email; //Editamos
    clientes.get(claveNueva).fechaNacimiento = FechaNacimiento; //Editamos
    clientes.get(claveNueva).nacionalidad = Nacionalidad; //Editamos
    //clientes.get(clave).key = FechaNacimiento;//Editam
    //console.log(clientes.get(FechaNacimiento)+"Mostramos todos ")
    //console.log(cliente);
    let cliente = document.getElementById(claveNueva); //llamamos el elemento de la tabla
    cliente.parentNode.removeChild(cliente); //Eliminamos elemento del html
    //console.log("Mostramos a aprtir de la clave"+clientes);
    mostrarClienteHtml(clientes.get(claveNueva)); //Agregamos elemento del html
    formAgregarCliente.setAttribute(
    "class",
    "container-fluid mb-5  visually-hidden"
    ); //ocultar Form
    mostrarClientes.setAttribute("class", "container-fluid visually"); //mostrar tabla
    cargarBotonesEditar();
    cargarBotonesInciarVenta();
    cargarBotonesEliminar();
} else {
    console.log(clientes.get(claveAntigua));
    console.log("no existe la clave");
    let cliente = document.getElementById(claveAntigua); //llamamos el elemento de la tabla
    cliente.parentNode.removeChild(cliente); //Eliminamos elemento del html
    Agregar(clientes.get(claveAntigua).puntos);
    clientes.delete(claveAntigua);
    console.log(clientes);
}
}

function cargarBotonesEliminar(){
botonesEliminar = document.querySelectorAll('button#botonEliminarCliente');
//console.log(botonesEliminar);
botonesEliminar.forEach(element => {
    //console.log(element);
    element.addEventListener('click', function(event){
        event.preventDefault();
        let cliente = document.getElementById(element.value); //llamamos el elemento de la tabla
        cliente.parentNode.removeChild(cliente); //Eliminamos elemento del html
        clientes.delete(element.value);
        console.log(clientes);

    });
})
}

botonBuscarCliente.addEventListener("click", function (event) {
const inputBuscarCliente = document.getElementById('inputBuscarCliente');
event.preventDefault();
let listaQuitarFront = [];
let listaMostrar = [];
contador = 0;
//console.log('Si entre al buscar');
//console.log("Esta es la caja " + inputBuscarCliente.value);
if (inputBuscarCliente.value === "") {
    for (let llaves of clientes.keys()) {
    //console.log("Elemento " + llaves);
    listaMostrar.push(llaves);
    }
} else {
    for (let llaves of clientes.keys()) {
    //console.log("for  " + llaves.toUpperCase());
    if (
        llaves.toUpperCase().includes(inputBuscarCliente.value.toUpperCase()) ==
        true
    ) {
        //console.log("siiiiiiiii");
        listaMostrar.push(llaves);
        contador += 1;
    } else {
        listaQuitarFront.push(llaves);
    }
    }
}
//console.log("mostrar " + listaMostrar);
//console.log("quitar " + listaQuitarFront);
if (listaQuitarFront.length > 0) {
    mostarVista(listaMostrar);
    quitarVista(listaQuitarFront);
} else {
    //console.log("entro a mostrar");
    mostarVista(listaMostrar);
}
});


function mostarVista(listaMostrar) {
for (let i = 0; i < listaMostrar.length; i++) {
    elemento = document.getElementById(listaMostrar[i]);
    //console.log("Mostrando a "+listaMostrar[i]);
    elemento.setAttribute("class", "visually");
}
}
function quitarVista(listaQuitar) {
for (let i = 0; i < listaQuitar.length; i++) {
    elemento = document.getElementById(listaQuitar[i]);
    //console.log("quitando a: "+listaQuitar[i]);
    elemento.setAttribute("class", "visually-hidden");
}
}
//Fin Modulo Clientes --------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
// Inicio Modulo Video Juegos


// Juegos base de datos inicial ---------------------------------------------
const juegos = new Map();
juegos.set("1001", {
  ID: "1001",
  nombreJuego: "Pacman",
  valor: 525000,
  tematica:"aventura",
  puntos: "100",
  imagen:
    "https://www.mdtech.news/u/fotografias/m/2022/10/6/f638x638-9666_67833_5050.jpg",
});
juegos.set("2020", {
  ID: "2020",
  nombreJuego: "Arena Of Valor",
  valor: 125000,
  tematica:"P2P",
  puntos: "150",
  imagen:
"https://i.ytimg.com/vi/JovW3pBD_xY/maxresdefault.jpg"
});
juegos.set("3124", {
  ID: "3124",
  nombreJuego: "Call Of Duty",
  valor: 250000,
  tematica:"Shooter",
  puntos: "250",
  imagen:
"https://www.semana.com/resizer/1QS9_LQG4z7To4gSZLUfONd2vZE=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/SPTYC6GPDNB5BCJKSAZZZ4G7GA.jpg"
});
juegos.set("3125", {
  ID: "3125",
  nombreJuego: "Halo 20",
  valor: 525000,
  tematica:"Shooter Accion",
  puntos: "300",
  imagen:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmsAWnuMWQCZEmp7GsoB8MA2iOpODANavjw&usqp=CAU"
});
//fin base de datos Juegos  -------------------------------------------------

// Inicio de modulo juegos ------------------------------------------------
const formAgregarJuego = document.getElementById('formAgregarJuego');
const tarjetasJuegos = document.getElementById('tarjetasJuegos');
const botonMostrarVideoJuegos = document.getElementById('botonMostrarVideoJuegos');
const botonOcultarFormJuegos = document.getElementById('botonOcultarFormJuegos');
const botonCrearJuego = document.getElementById('botonCrearJuego');


botonCrearJuego.addEventListener('click', function () {
  formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually');
  tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
});

botonMostrarVideoJuegos.addEventListener('click', function (e) {
    e.preventDefault();

  formAgregarCliente.setAttribute(
    "class",
    "container-fluid mb-5  visually-hidden"
    );
    //ocultamos tabla
    mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
    tarjetasJuegos.setAttribute('class', 'container-fluid visually');
    botonCrearJuego.setAttribute('class', 'btn btn-success  visually');
    const botonesEliminarJuego = document.querySelectorAll('button#botonEliminarJuego');
    botonesEliminarJuego.forEach(element => {
        element.setAttribute('class', 'btn-close visually');
    });
    const botonesSeleccionarJuego = document.querySelectorAll('button#botonSeleccionarJuego');
    botonesSeleccionarJuego.forEach(element => {
        element.setAttribute('class', 'btn btn-success visually-hidden');
    });
    mostrarVentas.setAttribute('class','container-fluid visually-hidden');
    home.setAttribute('class', 'container-fluid visually-hidden');
})

botonOcultarFormJuegos.addEventListener('click', function (e) {
    tarjetasJuegos.setAttribute('class', 'container-fluid visually');
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');

});


function mostrarJuegos() { // muestras los juegos gaurdados inicialmente
    //let divRow = document.createElement('div');divRow.setAttribute("class","row");
    //divRow.textContent="Hola"
    for (const [clave, datos] of juegos) {
      agregarAlHtmlJuegos(datos);
    }
    cargarBotonesEliminarJuego();
  }
  
function agregarAlHtmlJuegos(datos) {
const mostrarJuegos = document.getElementById("mostrarJuegos");
//console.log("Estows son los datos " + datos);
let divcol = document.createElement("div");
divcol.setAttribute(
    "class",
    "mt-2  col-xl-3 col-lg-4 col-md-6 col-sm-6 col-"
);
divcol.setAttribute("id", datos.ID);

let divCard = document.createElement("div");
divCard.setAttribute("style", "15rem;height:370px");
divCard.setAttribute("class", "card");

let imagen = document.createElement("img");
imagen.setAttribute("src", datos.imagen);
imagen.setAttribute("style", "height:150px ; width:auto");
imagen.setAttribute("class", "card-img-top");
//console.log(datos.imagen);

let divCardBody = document.createElement("div");
divCardBody.setAttribute("class", "card-body");

let titleCard = document.createElement("h5");
titleCard.setAttribute("class", "card-title");
titleCard.textContent = datos.nombreJuego;

let valorJuego = document.createElement("p");
valorJuego.setAttribute("class", "card-text");
valorJuego.textContent = "Valor: " + datos.valor;

let tematica = document.createElement("p");
tematica.setAttribute("class", "card-text");
tematica.textContent = "Tematica: " + datos.tematica;

let puntosP = document.createElement("p");
puntosP.setAttribute("class", "card-text");
puntosP.textContent = "Puntos: " + datos.puntos;

let botonEliminar = document.createElement("button");
botonEliminar.setAttribute("id", "botonEliminarJuego");
botonEliminar.setAttribute("value", datos.ID);
botonEliminar.setAttribute("class", "btn-close");
botonEliminar.setAttribute(
    "style",
    "position: absolute; z-index: 2; background-color: white; border: 1px solid"
);

let botonSelecciuonarJuego = document.createElement("button");
botonSelecciuonarJuego.setAttribute("id", "botonSeleccionarJuego");
botonSelecciuonarJuego.setAttribute("value", datos.ID);
botonSelecciuonarJuego.setAttribute(
    "class",
    "btn btn-success visually-hidden"
);
botonSelecciuonarJuego.setAttribute("data-bs-target", "#exampleModal");
botonSelecciuonarJuego.setAttribute("data-bs-toggle", "modal");
botonSelecciuonarJuego.textContent = "Seleccionar";

//let inputOculto = document.createElement("input");
//inputOculto.setAttribute("value", datos.titulo);
//inputOculto.setAttribute("id", "datoBorrar");

divCardBody.appendChild(titleCard);
divCardBody.appendChild(valorJuego);
divCardBody.appendChild(tematica);
divCardBody.appendChild(puntosP);
divCardBody.appendChild(botonSelecciuonarJuego);

divCard.appendChild(botonEliminar);
divCard.appendChild(imagen);
divCard.appendChild(divCardBody);
// divCard.appendChild(inputOculto);

divcol.appendChild(divCard);
mostrarJuegos.appendChild(divcol);
}
mostrarJuegos(); //carga inicial de Juegos

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function AgregarJuego (){
    const Nombre = document.getElementById('Nombre').value;
    const Valor = document.getElementById('Valor').value;
    const Puntos = document.getElementById('Puntos').value;
    const Tematica = document.getElementById('Tematica').value;
    const Link = document.getElementById('Link').value;
    const identificador = getRandomInt(1000000).toString();
    juegos.set(identificador, {
        ID: identificador,
        nombreJuego: Nombre,
        valor: Valor,
        tematica:Tematica,
        puntos: Puntos,
        imagen:Link
    });
    agregarAlHtmlJuegos(juegos.get(identificador));
    console.log(juegos);
    cargarBotonesEliminarJuego();

     document.getElementById('Nombre').value = "";
     document.getElementById('Valor').value = "";
     document.getElementById('Puntos').value = "";
     document.getElementById('Tematica').value = "null";
     document.getElementById('Link').value = "";
  }

  const botonGuardarJuego = document.getElementById('botonGuardarJuego');
  botonGuardarJuego.addEventListener('click', function () {
    AgregarJuego();
    tarjetasJuegos.setAttribute('class', 'container-fluid visually');
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
  })

  function cargarBotonesEliminarJuego (){
    const botonesEliminarJuego = document.querySelectorAll('button#botonEliminarJuego');
    botonesEliminarJuego.forEach(element => {
        //console.log(element);
        element.addEventListener('click', function (event) {
            event.preventDefault();
            let juego = document.getElementById(element.value); //llamamos el elemento de la tabla
            juego.parentNode.removeChild(juego); //Eliminamos elemento del html
            juegos.delete(element.value);
            console.log(juegos);
        });
    })
  }


  //Fin Modulo Juegos ----------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//Modulo Compra de video Juego ----------------------------------------------------------------

const ventas = new Map();
ventas.set("2587", {
  ID: "2587",
  idJuego: "1001",
  valorBase: 525000,
  valorImpuestos:105000,
  valorTotal:630000,
  idCliente:"AndresAngarita1095834643",
  puntosVenta: 100,
  vendido: true,
  fecha: "6/13/2023"
});


const listado = [];
function cargarBotonesInciarVenta (){
    let botonesIniciarVenta = null;
    botonesIniciarVenta = document.querySelectorAll('button#botonIniciarVenta');
    //console.log(botonesIniciarVenta);
    botonesIniciarVenta.forEach(elementIdCliente => {
        elementIdCliente.addEventListener('click', function(event){
            let botonesSeleccionarJuego = document.querySelectorAll('button#botonSeleccionarJuego');
            event.preventDefault();
            console.log("Si iniciamos ventas: " + elementIdCliente.value);
            let idVenta = getRandomInt(89000).toString();
            ventas.set(idVenta, {
                ID: idVenta,
                idJuego: "",
                valorBase: 0,
                valorImpuestos:0,
                valorTotal:0,
                idCliente:elementIdCliente.value,
                puntosVenta: 0,
                vendido: false,
                fecha: ""
              });
              console.log("Etsamos cargar botones ventas "+ ventas.get(idVenta).idCliente);
            //Ocultamos la tabla de clientes
            mostrarClientes.setAttribute("class", "container-fluid visually-hidden");//ocultar clientes
            formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');//ocultamos Por si acaso
            tarjetasJuegos.setAttribute('class', 'container-fluid visually');//mostrar tarjetas juegos
            ocultarBotonesEliminarYCrear();//se ocultan botones de edicion y crear
            //mostrarBotonesSeleccionar(idVenta,element.value);//mostrar boton pra continuar la venta
            botonesSeleccionarJuego.forEach(elementoJuego =>{
                elementoJuego.setAttribute('class', 'btn btn-success visually');
            })
            botonesSeleccionarJuego.forEach(elementIdJuego => {
                //element.setAttribute('class', 'btn btn-success visually');
                elementIdJuego.addEventListener('click', function(event){
                    event.preventDefault();
                    let cliente = clientes.get(elementIdCliente.value);
                    let juego = juegos.get(elementIdJuego.value);
                    insertarModal(idVenta, cliente, juego);
                    listado[0]= idVenta;
                    listado[1]= elementIdCliente;
                    listado[2]= elementIdJuego;
                    //console.log("repeticion afuera");
                });
            });
        });
    });
}

botonVender.addEventListener('click', function(){
    //console.log("repeticion");
    //botonVenderJuego(idVenta, element.value,element2.value)
    let idVenta = listado[0];
    let elementIdCliente = listado[1];
    let elementIdJuego = listado[2];
    let hoy = new Date();
    let fecha = hoy.toLocaleDateString('en-US');
    //console.log(fecha);
    //console.log(ventas);
    //console.log(idVenta+" "+idCliente+" "+idJuego);
    //asiganamos valores al map de ventas
    //console.log("Este es el elementIDJuego "+elementIdJuego);
    let juego = juegos.get(elementIdJuego.value);
    ventas.get(idVenta).idJuego =  elementIdJuego.value;
    ventas.get(idVenta).valorBase =  parseInt(juego.valor);
    ventas.get(idVenta).valorImpuestos =  parseInt(juego.valor)*0.20;
    ventas.get(idVenta).valorTotal =  parseInt(juego.valor)+((parseInt(juego.valor)*0.20));
    ventas.get(idVenta).puntosVenta =  juego.puntos;
    ventas.get(idVenta).fecha =  fecha;
    //console.log(ventas);

    //asiganmos los nuevos puntos
    const cliente = clientes.get(elementIdCliente.value);
    let puntosAntiguos = cliente.puntos;
    let sumaPuntos = parseInt(puntosAntiguos)+parseInt(juego.puntos);
    clientes.get(elementIdCliente.value).puntos = sumaPuntos;
    //console.log(clientes);
    const clienteActualizar = document.getElementById(elementIdCliente.value);
    clienteActualizar.parentNode.removeChild(clienteActualizar); //Eliminamos elemento del html
    mostrarClienteHtml(clientes.get(elementIdCliente.value));
    ventas.get(idVenta).vendido = true;
    console.log("Mpas ventas",ventas);


    //mostramos la tabla de Ventas ----------------------------------------------------------------
    mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
    tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
    mostrarVentas.setAttribute('class','container-fluid visually');
    limpiarTablaVentas();
    cargaVentas();
    cargarBotonesInciarVenta();//cargar botones
    
});

function ocultarBotonesEliminarYCrear(){
    botonCrearJuego.setAttribute('class', 'btn btn-success  visually-hidden');
    let botonesEliminarJuego = document.querySelectorAll('button#botonEliminarJuego');
    botonesEliminarJuego.forEach(element => {
        element.setAttribute('class', 'btn-close visually-hidden');
    });
}

// function mostrarBotonesSeleccionar(idVenta, idCliente){
//     let botonVender = null;
//     botonVender = document.getElementById('botonVender');
//     let botonesSeleccionarJuego = null;
//     botonesSeleccionarJuego = document.querySelectorAll('button#botonSeleccionarJuego');
//     botonesSeleccionarJuego.forEach(element => {
//         //element.setAttribute('class', 'btn btn-success visually');
//         element.addEventListener('click', function(event){
//             event.preventDefault();
//             let cliente = clientes.get(idCliente);
//             let juego = juegos.get(element.value);
//             insertarModal(idVenta, cliente, juego);

//             console.log("repeticion afuera");
//             botonVender.addEventListener('click', function(){
//                 console.log("repeticion");
//                 botonVenderJuego(idVenta, idCliente,element.value)
//             });
//         });
//     });
// }

function insertarModal(idVenta, cliente, juego) {
    //console.log(cliente);
    //console.log(juego);
    const nombresCliente = document.getElementById("nombresCliente");
    const documentosCliente = document.getElementById("documentosCliente");
    const puntosClientes = document.getElementById("puntosClientes");
    const nombreJuego = document.getElementById("nombreJuego");
    const tematica = document.getElementById("tematica");
    const puntosJuego = document.getElementById("puntosJuego");
    const spanIdVenta = document.getElementById('spanIdVenta');
    const valorJuego = document.getElementById('valorJuego');
  

    spanIdVenta.innerHTML="";
    puntosClientes.innerHTML = " ";
    tematica.innerHTML = " ";
    nombreJuego.innerHTML = " ";
    puntosJuego.innerHTML = " ";
    valorJuego.innerHTML = " ";


    spanIdVenta.textContent = idVenta;
    puntosClientes.textContent = " "+cliente.puntos;
    tematica.textContent = " " + juego.tematica;
    nombreJuego.textContent = " " + juego.nombreJuego;
    puntosJuego.textContent = " " + juego.puntos;
    valorJuego.textContent = " " + juego.valor;
    nombresCliente.textContent= cliente.nombres + " " + cliente.apellidos;
    documentosCliente.textContent = cliente.identificacion;
  }


//   function botonVenderJuego(idVenta, idCliente, idJuego){
//     let hoy = new Date();
//     let fecha = hoy.toLocaleDateString('en-US');
//     //console.log(fecha);
//     //console.log(ventas);
//     //console.log(idVenta+" "+idCliente+" "+idJuego);
//     //asiganamos valores al map de ventas
//     const juego = juegos.get(idJuego);
//     ventas.get(idVenta).idJuego =  idJuego;
//     ventas.get(idVenta).valorBase =  parseInt(juego.valor);
//     ventas.get(idVenta).valorImpuestos =  parseInt(juego.valor)*0.20;
//     ventas.get(idVenta).valorTotal =  parseInt(juego.valor)+((parseInt(juego.valor)*0.20));
//     ventas.get(idVenta).puntosVenta =  juego.puntos;
//     ventas.get(idVenta).fecha =  fecha;
//     //console.log(ventas);

//     //asiganmos los nuevos puntos
//     const cliente = clientes.get(idCliente);
//     let puntosAntiguos = cliente.puntos;
//     let sumaPuntos = parseInt(puntosAntiguos)+parseInt(juego.puntos);
//     clientes.get(idCliente).puntos = sumaPuntos;
//     //console.log(clientes);
//     const clienteActualizar = document.getElementById(idCliente);
//     clienteActualizar.parentNode.removeChild(clienteActualizar); //Eliminamos elemento del html
//     mostrarClienteHtml(clientes.get(idCliente));
//     ventas.get(idVenta).vendido = true;
//     console.log(ventas);


//     //mostramos la tabla de Ventas ----------------------------------------------------------------
//     mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
//     formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
//     tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
//     mostrarVentas.setAttribute('class','container-fluid visually');
//     limpiarTablaVentas();
//     cargaVentas();
//     //cargarBotonesInciarVenta();//cargar botones
//   }
  





// fin modulo Compra de video juegos ---------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//Modulo Mostrar Ventas ------------------------------------------------------------------------------------------------
const botonVentas = document.getElementById('botonVentas');
const mostrarVentas = document.getElementById('mostrarVentas');

botonVentas.addEventListener('click', function (event) {
    event.preventDefault();
    //mostramos la tabla de Ventas ----------------------------------------------------------------
    mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
    tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
    mostrarVentas.setAttribute('class','container-fluid visually');
    home.setAttribute('class', 'container-fluid visually-hidden');
    limpiarTablaVentas();
    cargaVentas();
});

function limpiarTablaVentas(){
    for (const [clave, datos] of ventas) {
        limpiarventa(datos.ID); 
      }
}

function cargaVentas(){
    for (const [clave, datos] of ventas) {
        //limpiarventa(datos.ID);
        if (datos.vendido == true) {
            mostrarVentasHtml(datos); //ACA IMPRIME DATOS EN LA TABLA
        }
      }
}

function mostrarVentasHtml(venta) {//metodo que nos sirve para insertar ventas a la tabla del html
    const insertarVentas = document.getElementById("insertarVentas");
    let tr = document.createElement("tr");
    tr.setAttribute(
      "id",
      venta.ID
    );
  
    let thIdVenta = document.createElement("th");
    thIdVenta.textContent = venta.ID;
  
    let tdCliente = document.createElement("td");
    tdCliente.textContent = clientes.get(venta.idCliente).nombres;
  
    let tdIdentificacion = document.createElement("td");
    tdIdentificacion.textContent = clientes.get(venta.idCliente).identificacion;
  
    let tdJuego = document.createElement("td");
    tdJuego.textContent = juegos.get(venta.idJuego).nombreJuego;
  
    let tdBase = document.createElement("td");
    tdBase.textContent = venta.valorBase;
  
    let tdValorImpuestos = document.createElement("td");
    tdValorImpuestos.textContent = venta.valorImpuestos;
  
    let tdTotal = document.createElement("td");
    tdTotal.textContent = venta.valorTotal;
  
    let tdPuntos = document.createElement("td");
    tdPuntos.textContent = venta.puntosVenta;
    
    let tdFecha = document.createElement("td");
    tdFecha.textContent = venta.fecha;
  
  
    tr.appendChild(thIdVenta);
    tr.appendChild(tdCliente);
    tr.appendChild(tdIdentificacion);
    tr.appendChild(tdJuego);
    tr.appendChild(tdBase);
    tr.appendChild(tdValorImpuestos);
    tr.appendChild(tdTotal);
    tr.appendChild(tdPuntos);
    tr.appendChild(tdFecha);
  
    insertarVentas.appendChild(tr);
  }
  cargaVentas();

function limpiarventa(venta){
    let vent = document.getElementById(venta); //llamamos el elemento de la tabla
    if (vent){
        vent.parentNode.removeChild(vent); //Eliminamos elemento del html
    }else{

    }
}
//Fin Modulo Mostrar ventas ------------------------------------------------------------------------------------------------
botonHome.addEventListener("click", function(event){
    event.preventDefault();
    //mostramos la tabla de Ventas ----------------------------------------------------------------
    mostrarClientes.setAttribute("class", "container-fluid visually-hidden");
    formAgregarJuego.setAttribute('class', 'container-fluid mb-1 visually-hidden');
    tarjetasJuegos.setAttribute('class', 'container-fluid visually-hidden');
    mostrarVentas.setAttribute('class','container-fluid visually-hidden');
    home.setAttribute('class', 'container-fluid visually');
    limpiarTablaVentas();
    cargaVentas();

});