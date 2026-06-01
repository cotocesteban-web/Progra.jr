// const bodyParser = require("body-parser")
// const { domainToASCII } = require("node:url")

 /// Que es fetch()?
 // sirve para hacer solicitudes httpp. nos permite comunicarnos con sevicios externos servidores bases de datos 
 // ## que reuselve fetch va contener el estado o el codigo del estado el eencabezado o el body 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=> response.json())// convierte la respuesta en json
//     .then(data=> console.log(data)) // mostrar datos
// .catch(error => console.error("error en la solicitud",error))


async function obtenerUsuarios() {
    try{
        console.log("Solicitando datos...")
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respuesta.ok)
            throw new Error("Error HTTP", respuesta.status)

        const usuarios = await respuesta.json()
        console.log("usuarios recibidos", usuarios)

    }
    catch(error) {
        console.error("Hubo un problema con la solicitud:", error.message)
    }
}
obtenerUsuarios()


// enviar datos con fetch:
async functioncrearUsuario(){
    const nuevoUsuarios ={
        name: "Diego Orozco"
        email: "diego@orosco.com"
    }
    try{
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {
            header: {
                "Content-Type": "application/json"
        },

    
    )
    }
}



/// Otras formas de usar fetch 
// descargar texto

const res = await fetch("urlhttp")
const html = await res.text()
console.log(html)


// descargar imagenes:

const res = await fetch("url")

const blob = await res.blob();
document.getElementById("imagen").src = URL.createObjectURL(blob)


// otra forma: .html para abrirlo ene el navegador
<img id="imagen" width="300"/>
<script>

async function cargarImagen() {
    try {
        const rest = await fetch("url")
        const blob = await res.blob();
        const URLTemporal = URL.createObjectURL(blob)
        document.getElementById("imagen").src = URL.createObjectURL(blob)
        console.log("la imagen esta cargando")
    }
    catch(error){
        console.error("Error al descargar:", error)
    }
}
cargarImagen()
<script>


/// uso del archivo ".env" en nodejs
para usarlo tenemos que instalar una libreria: 
npm install dotenv


//m
import dotenv from `dotenv`;
