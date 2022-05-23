let socket =io.connect()

const agregarMensaje= ()=>{
  let user = document.getElementById('usuario').value;
  let msj = document.getElementById('mensaje');
  let envio = {
    mail: user,
    mensaje: msj.value,
  };
  socket.emit("mensajeNuevo", envio);
  msj.value=""
  msj.focus()
  return false
}

const agregarProducto = ()=>{
  let nuevoProducto = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    thumbnail: document.getElementById("thumbnail").value,
  };
    socket.emit("productoNuevo", nuevoProducto);

    return false;
}
 
const renderMensajes= (data)=>{ 
  const mensajeNuevo = data.map((dato) => {
      return (`<p><span class="estiloMail">${dato.mail}</span> - <span class="estiloFecha">${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}</span> - <span class="estiloMensaje">${dato.mensaje}</span></p>`);
    }).join(" ");
  document.getElementById('conversacion').innerHTML= mensajeNuevo;
  
}

const renderProductos= (data)=>{ 
  let productoAgregado= data.map((dato) => {
                  return (
                    `<tr>
                      <td>${dato.title}</td>
                      <td>${dato.price}</td>
                      <td>
                        <img width="50px" height=""src="${dato.thumbnail}" alt="${dato.title}"></img> 
                      </td> 
                    </tr>`)})
  let condicionRender;

  if (data==false) {
    condicionRender = "<h3>No se encontraron productos</h3>";

  } else {
    condicionRender = `<table>
          <thead>
            <tr>
                <th>Nombre de producto</th>
                <th>Precio</th>
                <th>Foto</th>
            </tr>
          </thead>
        <tbody>
          ${productoAgregado.join("")}
        </tbody>
      </table>`;
    }
  let o = (document.getElementById("lista").innerHTML = condicionRender);
} 

socket.on("mensajes", (data) => {
    renderMensajes(data);
  });

socket.on("productos", (data) => {
  renderProductos(data); 
});