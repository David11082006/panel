

const express = require('express')//import express fw
const app = express()//spusteni expresu
const port = 80//definovani portu
const path = require('path');//pro manipulaci s cestami, ať už se jedná o absolutní cesty, relativní cesty
const bodyParser = require('body-parser');//imort bodyParseru
app.use(bodyParser.urlencoded({ extended: false }));//dekoduje data poslana pres POST


app.use(express.static(path.join(__dirname, 'scripts')))
app.use(express.static(path.join(__dirname, 'styles')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "192.168.1.161",
  user: "sofia.skoliar",
  password: "asdf1234456789",
  database:"sofia.skoliar",
  port: 3001
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/', (req, res) => {//home routa

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM timetable", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.render('index', { result });
        });
      });

})

app.get('/panel', (req, res) => {

  con.connect(function(err) {
    
        res.render('panel');
      
    });

})




app.listen(port, () => {//spustni serveru
  console.log(`Example app listening on port ${port}`)
})




  app.get("/newuser", (reg, res) => {
    res.render("newuser");
  })

  app.post('/createuser', function (request, response, next) {
    console.log(request.body)
      // SQL dotaz pro vložení dat do databáze
      var sql = `INSERT INTO users (fname, lname) VALUES ('${request.body.fname}', '${request.body.lname}')`;
     
      con.query(sql, (error, results, fields) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(results);
      })
      response.send(`Uživatele byli vloženi do DB`)
     
    })

    