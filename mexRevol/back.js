const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "microresult",
  port: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка подключения: " + err.stack);
    return;
  }
  console.log("Подключено как ID " + connection.threadId);
});

function saveQuizResult(result) {
  const query = "INSERT INTO microresult (result) VALUES (?)";
  connection.query(query, [result], (error, results) => {
    if (error) {
      return console.error("Ошибка при вставке данных: " + error.message);
    }
    console.log("Результат успешно сохранен: ", results.insertId);
  });
}

module.exports = { saveQuizResult };
