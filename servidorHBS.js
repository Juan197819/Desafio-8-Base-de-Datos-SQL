import productosLista from './productos.js';
import express from 'express';
import random from 'random'
import exphbs from 'express-handlebars';
import {Server as HttpServer} from "http";
import {Server as IOServer} from "socket.io";
import {tablaProductosSQL,tablaMensajesSQLITE} from './BD/schemas.js'
export {knexSQL, knexSQLite}
from './BD/configKnex.js'
import  ContenedorKnex from './BD/contenedor.js'

const app= express(); 
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer) 

app.engine('handlebars',exphbs.engine())
app.use(express.static('views'))  

app.set('view engine','handlebars')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true})) 

//-----------------------GET-----------------------
let productos = []

app.get('/',(req, res) => {
    
    let ejemploDeProducto=productosLista[random.int(0, 2)]
    console.log('peticion GET');
    res.render("formulario", {ejemploDeProducto});
})

//---------------WEBSOCKETS------------------------------


let mensajes  = [
]     

io.on("connection", (socket) => { 
  console.log("Usuario Conectado");
  console.log(mensajes);
  socket.emit("mensajes", mensajes);

  socket.on("mensajeNuevo", (newMessage) => {
    mensajes.push(newMessage);
    io.sockets.emit("mensajes", mensajes);
        try {
          const mensajesSQLite = new ContenedorKnex(knexSQLite, tablaMensajesSQLITE)
          mensajesSQLite.save()
            console.log('Archivo.txt creado con exito');
        } catch (err) {
          throw new Error(err);        }
        // try {
        //     fs.writeFileSync(
        //       "./mensajes.txt",
        //       JSON.stringify(mensajes)
        //     );
        //     console.log('Archivo.txt creado con exito');
        // } catch (err) {
        //   throw new Error(err);        }
    }

  );
  
 socket.emit("productos", productos); 
  socket.on("productoNuevo", (newProduct) => {
    productos.push(newProduct)
    io.sockets.emit("productos", productos);
  });  
});    


//---------------SERVER LISTEN------------------------------

const PORT=process.env.PORT || 8080; 

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor con Websockets en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (error) =>
  console.log(`El error fue el siguiente ${error}`)
);
