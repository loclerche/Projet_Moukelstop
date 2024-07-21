import express from "express";
import mysql from "mysql2";
const port = process.env.PORT || 5000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "MoukelaDB",
});

connection.connect((err) => {
  if (err) {
    console.log("Erreur de connexion: " + err.stack);
    return;
  }
  console.log("Connexion réussi a la base de données !");
});

connection.query("SELECT * FROM Client", (err, rows, fields) => {
  if (err) throw err;
  console.log("Les données sont : ", rows);
});

app.listen(port, () => {
  console.log("serveur est en ligne");
});
