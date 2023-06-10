const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 443;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tras8447_atqiya',
  password: 't+~IViO[WeQJ', // Ganti dengan password MySQL Anda
  database: 'tras8447_pandaData', // Ganti dengan nama database Anda
});

// Middleware untuk mengizinkan CORS
app.use(cors());

// Middleware untuk parsing body JSON
app.use(express.json());

// Menerima dataFinal dari ReactJS
app.post('/api/saveData', (req, res) => {
  const dataFinal = req.body.dataFinal;

  // Melakukan query untuk menyimpan dataFinal ke database
  const query = 'INSERT INTO panda_data (panda) VALUES (?)';
  connection.query(query, [JSON.stringify(dataFinal)], (error, results, fields) => {
    if (error) throw error;
    res.header('Access-Control-Allow-Origin', 'http://trash-panda.site');
    res.send('Data saved successfully');
  });
});

// Handle root URL request
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Memulai server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});