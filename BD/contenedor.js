
 class ContenedorKnex {
   constructor(config, tabla){
     this.config = config,
     this.tabla = tabla
   }
   async obtenerBaseDatosInicial(){
    try {
        await fs.promises.writeFile(this.nombreArchivo, (JSON.stringify(base)))
        console.log('Archivo.txt creado con exito');
    } catch (error) {
        console.log('Fallo metodo obtenerBaseDatosInicial' + error);
    }
}
async leer(){
    try {
        const archivo = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
        const archivoParseado = (JSON.parse(archivo));
        return archivoParseado
    } catch (error) {
        console.log('Fallo metodo leer' + error);
    }
}
//     METODOS SOLICITADOS EN DESAFIO

async save(dato) {
    try {
        const archivoParseado = await this.leer();
        dato.id = (archivoParseado.length) + 1
        archivoParseado.push(dato)
        const archivoActualizado = (JSON.stringify(archivoParseado));
        fs.promises.writeFile(this.nombreArchivo, archivoActualizado);
        console.log(dato.id);
    } catch (error) {
        console.log('Fallo metodo save ' + error);
    }  
}
async getById(id) {
    try {
        const archivoParseado = await this.leer();
        const elementoBuscado= archivoParseado.find((e)=>e.id==id)
        console.log(elementoBuscado||null);
    } catch (error) {
        console.log('Fallo metodo getById ' + error);
    }
 }
 async getAll() {
    try {
        const archivoParseado = await this.leer();
        console.log(archivoParseado);
    } catch (error) {
        console.log('Fallo metodo getAll ' + error);
    }
 }
 async deleteById(id) {
    try {
        const archivoParseado = await this.leer();
        const nuevoListado= archivoParseado.filter((e)=>e.id!=id)
        const archivoActualizado = (JSON.stringify(nuevoListado));
        fs.promises.writeFile(this.nombreArchivo, archivoActualizado);
        console.log(nuevoListado);
    } catch (error) {
        console.log('Fallo metodo deleteById ' + error);
    }
 }
 async deleteAll() {
     try {
       await fs.promises.writeFile(this.nombreArchivo, "[]");
         console.log('Listado borrado');
     } catch (error) {
        console.log('Fallo metodo deleteAll ' + error);

     }
    }
 }
export default ContenedorKnex