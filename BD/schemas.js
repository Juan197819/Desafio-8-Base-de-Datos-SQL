import  {knexSQL, knexSQLite} from './configKnex.js'

//-----------------------------CREACION TABLA SQL------------------------------

let tablaProductosSQL= ()=> {
    knexSQL.schema.dropTableIfExists('ProductosSQL')
    .then(()=>console.log('Tabla productos eliminada'))
    .catch(error=> {console.log(`Error en Eliminacion de tabla de Productos SQL: ${error}`); throw error;})
    .finally(()=>{
            return knexSQL.schema.createTable('ProductosSQL', table=>{
            table.increments('id')
            table.string('title')
            table.float('price')
            table.string('thumbnail')
        })
        .then(()=>{console.log(`Tabla de productos SQL creada`)})
        .catch(error=> {console.log(`Error en creacion de tabla de Productos SQL: ${error}`); throw error;})
        .finally(()=>{
            knexSQL.destroy(()=>{console.log('Conexion de tabla SQL finalizada')})
        });
    })}

////-----------------------------CREACION TABLA SQLITE------------------------------

let tablaProductosSQLite = ()=>{
    knexSQLite.schema.dropTableIfExists('Mensajes SQLITE')
    .then(()=>console.log('Tabla Mensajes SQLITE eliminada'))
    .catch(error=> {console.log(`Error en Eliminacion de tabla de Mensajes SQL: ${error}`); throw error;})
    .finally(()=>{
         return  knexSQLite.schema.createTable('Mensajes SQLITE', table=>{
            table.increments('id')
            table.string('mail')
            table.string('mensaje')
        })
        .then(()=>{console.log('Tabla de Mensajes SQLite creados')})
        .catch((err)=>{console.log(`Error en creacion de tabla de Mensajes SQLite ${err}`); throw err})
        .finally(()=>
            knexSQLite.destroy(()=>console.log('Conexion de tabla SQLite cerrado'))
        )
    })}

export {tablaProductosSQL, tablaProductosSQLite}