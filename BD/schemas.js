import  {knexSQL, knexSQLite} from './configKnex.js'

//-----------------------------CREACION TABLA SQL------------------------------

knexSQL.schema.dropTable('Productos')
    .then(()=>console.log('Tabla productos eliminada'))
//     const tablaProductosSQL = knexSQL.schema.createTable('Productos', table=>{
//         table.increments('id')
//         table.string('title')
//         table.float('price')
//         table.string('thumbnail')
//     })
//     .then(()=>{console.log(`Tabla de productos creada`)}
//     ).catch(error=> {console.log(`Error en creacion de tabla de Productos SQL: ${error}`); throw error;}
//     ).finally(()=>{
//         knexSQL.destroy(()=>{console.log('Conexion de tabla SQL finalizada')})
//     });

// const array = [{
//     title: 'BARCO',
//     price: 123,
//     thumbnail:' AABARCOA@GMAIL.COM'},
//      {
//     title: 'Avion',
//       price: 553,
//      thumbnail:' Avion@GMAIL.COM'
//   }]

// knexSQL('Productos').insert([{
//     title: 'Camion',
//     price: 897,
//     thumbnail:' Camion@GMAIL.COM', 
//     },...array]
//     ).then(() => console.log('Datos SQL insertados')
//     ).catch((err) => console.log(`$error en INSERT SQL:  ${err}`)
//     ).finally(()=>{
//         knexSQL.destroy()
//     });

// console.log('A PARTIR DE AQUI SELECT SQL-FILA 43');

// knexSQL.from('Productos').select('*')
//     .then((result) => {
//         console.log('2da muestra'); 
//         for (const  fila of result) {
//             console.log(`TITULO: ${fila['title']}, ${fila.price}`);
//         }
//     }).catch((err) => {
//     console.log(`$error en SELECT SQL:  ${err}`);
// });


// //-----------------------------CREACION TABLA SQLITE------------------------------

// const tablaProductosSQLite = knexSQLite.schema.createTable('Mensajes', table=>{
//     table.increments('id')
//     table.string('mail')
//     table.string('mensaje')
// })
//     .then(()=>console.log('Tabla de Mensajes SQLite creados'))
//     .catch((err)=>{console.log(`Error en creacion de tabla de Mensajes SQLite ${err}`); throw err})
//     .finally(()=>
//         knexSQLite.destroy(()=>console.log('Conexion de tabla SQLite cerrado'))
// )

// knexSQLite('Mensajes')
// .insert({
//     mail:'jp@hotmail.com',
//     mensaje: 'hola juancho'
// })
//     .then(() => console.log('Datos SQLite insertados')
//     ).catch((err) => console.log(`$error en INSERT SQLite:  ${err}`)
//     ).finally(()=>
//     knexSQLite.destroy()
//     )


// console.log('A PARTIR DE AQUI SELECT SQLITE-FILA 81');

// knexSQLite.from('Mensajes').select('*')
// .then(() => console.log('Datos SQLite seleccionados')
// ).catch((err) => console.log(`$error en SELECT SQLite:  ${err}`)
// ).finally(()=>{
// knexSQLite.destroy()
// });

// export {tablaProductosSQL, tablaProductosSQLite}