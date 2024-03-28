
// const dbHost = process.env.DB_HOST;
// console.log(dbHost)
console.log(process.env.DB_HOST);
const sql=require('mysql2')

let conn=sql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

conn.connect(()=>{
    console.log("sql connected")
})

module.exports=conn