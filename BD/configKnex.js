import knex from 'knex'

const knexSQL = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root', 
    password : '',
    database : 'desafioSQL'
  },
  pool:{min:0,max:30}
});  

const knexSQLite =  knex({
  client: 'sqlite3',
  connection: {
    filename: "./BD/ecommerce.sqlite"
  },
  useNullAsDefault:true
  
});

export {knexSQL, knexSQLite}

