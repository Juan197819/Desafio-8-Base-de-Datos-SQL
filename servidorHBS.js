import productosLista from './productos.js';
import express from 'express';
import random from 'random'
import exphbs from 'express-handlebars';
import {Server as HttpServer} from "http";
import {Server as IOServer} from "socket.io";
import  {productos,mensajes} from './BD/contenedor.js'

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

app.get('/',(req, res) => {
    
    let ejemploDeProducto=productosLista[random.int(0, 2)]
    console.log('peticion GET');
    res.render("formulario", {ejemploDeProducto});
})
 
//---------------WEBSOCKETS------------------------------
let mensajes1=[
  
] 
let productos1=[]

io.on("connection", (socket) => { 
  console.log("Usuario Conectado");
  console.log(mensajes1);

  socket.emit("mensajes",mensajes1);

  socket.on("mensajeNuevo", (newMessage) => {
    mensajes1.push(newMessage);
    io.sockets.emit("mensajes", mensajes1);
    mensajes.guardar(mensajes1)
  });
  
  socket.emit("productos", productos1); 

  socket.on("productoNuevo", (newProduct) => {
    productos1.push(newProduct)
    io.sockets.emit("productos", productos1);
    productos.guardar(productos1)
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
