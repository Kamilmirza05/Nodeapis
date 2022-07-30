const  Pool  = require('pg').Pool
const pool = new Pool(
    {
        user: 'postgres',
  host: 'localhost',
  database: 'nodeapi',
  password: 'Mirza2022',
  port: 5432,
    }
)
module.exports = {
  query: (text, params) => pool.query(text, params),
}