import knex from 'knex'

const knexSQL = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root', 
    password : '',
    database : 'desafioSQL'
  }
});  

const knexSQLite =  knex({
  client: 'sqlite3',
  connection: {
    filename: "./baseDatos.sqlite"
  },
  useNullAsDefault:true
});

export {knexSQL, knexSQLite}

