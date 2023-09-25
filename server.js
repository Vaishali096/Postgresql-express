const express = require('express')
require("colors");
require('dotenv').config();
const { Pool, Client } = require("pg");
const app = express()
app.use(express.json());

const PORT = 8080;

const pool = new Pool();


app.get("/", (req, res)=>{
    res.send("welcome")
// })
// pool.querry('SELECT NOW()', (err,res)=>{
//     console.log("err: ", "res:", res.rows);
});

app.get('/fighters', (req, res)=> {
    pool
    .query("SELECT * FROM fighters;")
    .then((data) => res.json(data.rows))
    // .then((data) => res.send(data))
    .catch((e) =>res.sendStatus(500).send("Something went wrong"));
});
// app.get("/fighter/:id", (req, res) => {

// }
app.get("/time", (req, res)=>{
 pool.query('SELECT NOW()', (err,response)=>{
        res.send(response.rows);
        pool.end();
});
});
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`.rainbow);
});