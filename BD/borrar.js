import  {knexSQL, knexSQLite} from './configKnex.js'

knexSQL.schema.createTable('mensajes', table=>{
    table.increments('id')
    table.string('mail')
    table.string('mensaje')
})
.then(()=>console.log('Tabla de Mensajes creados'))
.catch((err)=>{console.log(`Error en creacion de tabla de productos SQL ${err}`); throw err})
.finally(()=>
    knexSQL.destroy(()=>console.log('Pull de tablaSQL cerrado'))
)
knexSQL('mensajes')
.insert({
    mail:'jp@hotmail.com',
    mensaje: 'hola juancho'
})
