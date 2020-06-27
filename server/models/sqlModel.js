const { Pool } = require('pg');

const PG_URI= 
'postgres://ashynzqt:zz_E4q1MkE8LPD9yWeiaz0W0sINSDfga@ruby.db.elephantsql.com:5432/ashynzqt';



const pool = new Pool({
    connectionString: PG_URI,
});


module.exports ={
    query:( text, params, callback)=>{
        console.log('executed query', text);
        return pool.query(text,params,callback);
    },
}

