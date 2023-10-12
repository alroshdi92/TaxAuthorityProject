const express = require('express');

const mysql = require('mysql2/promise');

const cors = require('cors');



const app = express();

const port = 5000;



app.use(cors());

app.use(express.json());



const 
pool =
mysql.createPool({

   host:
'localhost',

   user:
'root',

   password:
'123@Hajer',

   database:
'worlddata'



});



// Sample route to fetch data

app.get('/api/data',
async (req,res) => {

   try { const [rows]
= await pool.execute('SELECT * FROM worlddata.datarace');

       res.json(rows); } catch (err) {

       res.status(500).json({
error:
err.message });

   }

});



app.listen(port, ()=> {

   console.log(`Server running at http://localhost:${port}/`);

});
