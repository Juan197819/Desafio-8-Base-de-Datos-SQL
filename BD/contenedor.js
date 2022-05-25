import  {knexSQL, knexSQLite} from './configKnex.js'
import {tablaProductosSQL, tablaProductosSQLite} from './schemas.js'



  
class ContenedorKnex {
    constructor(config, tabla){
        this.config = config,
        this.tabla = tabla       
    }
    crearTabla(){
            if (this.tabla == 'Mensajes SQLITE'){
            tablaProductosSQLite()
        }else{
            tablaProductosSQL()
        }
    }

    guardar(datos) {

        this.config(this.tabla).insert(datos)
            .then(()=>{console.log(`${this.tabla} insertados`)})
            .catch((err) => console.log(`Error al insertar ${this.tabla}:  ${err}`))
            .finally(()=>{
                knexSQL.destroy()
                //console.log(`Finalizo metodo guardar ${this.tabla}`)
            })
    }

    borrar(){
        this.config.from(this.tabla).del()
        .then((u)=>{console.log(`${this.tabla} Borrados`, u)})
        .catch ((error)=>{console.log(`Error al BORRAR ${this.tabla}:  ${error}`)})
        .finally(()=>{
            knexSQL.destroy()
            console.log(`Finalizo metodo BORRAR ${this.tabla}`)
        });
    }

    leer() {
        this.config.from(this.tabla).select('*')
        .then((u)=>{console.log(`${this.tabla} Leidos   ,`, u)})
        .catch ((error)=>{console.log(`Error al LEER ${this.tabla}:  `, error)})
        .finally(()=>{
            knexSQL.destroy()
            console.log(`Finalizo metodo LEER ${this.tabla}`)
        });
        
    }
            // .then((result) => {
            //     let u;
            //     for (const row of result) {
            //         u= u + `Usuario: ${row.mail}- Mensaje: ${row.mensaje}`
            //         console.log(`Usuario: ${e.mail}- Mensaje: ${e.mensaje}`)
            //     }                
            // })
}
let productos = new ContenedorKnex(knexSQL,'ProductosSQL')
let mensajes = new ContenedorKnex(knexSQLite,'Mensajes SQLITE')
export {productos, mensajes} 
