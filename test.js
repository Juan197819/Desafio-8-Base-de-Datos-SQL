const Contenedor = require('./index')
const listado = new Contenedor('./productos.txt')

 //1° Ejecutar la sig funcion para crear archivo inicial .txt (yo copie los productos de las diapositivas como base de datos en un archivo aparte .js) 

listado.obtenerBaseDatosInicial()

// 2° EJECUCION DE METODOS PARA TESTEO (PROBARLOS DE A UNO POR VEZ)
 
/* listado.save({
    title: 'Hacha',
    price: 350.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/png',                                      
})*/  
// listado.getById(2)
// listado.getAll()
// listado.deleteById(1)
// listado.deleteAll() 