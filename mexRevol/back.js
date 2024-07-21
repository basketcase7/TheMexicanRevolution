const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3007;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test_schema",
  port: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка соединения с базой данных:", err);
    return;
  }
  console.log("Соединение с базой данных успешно установлено");
});

app.use(cors());

app.use(bodyParser.json());

app.post("/saveResult", (req, res) => {
  const result = req.body.result;
  const query = "INSERT INTO microresult (result) VALUES (?)";

  connection.query(query, [result], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Ошибка при вставке данных" });
    }
    res
      .status(200)
      .json({ message: "Результат успешно сохранен", id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
