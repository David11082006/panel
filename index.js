const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'scripts')))
app.use(express.static(path.join(__dirname, 'styles')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MYSQL

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "192.168.1.161",
  user: "panel.test",
  password: "Paneltest-378",
  database:"projekt.panel",
  port: 3001
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//:MYSQL

//GET

app.get('/', (req, res) => {

  con.connect(function(err) {
    
        res.render('panel2');
      
    });

})

app.get('/snacks', (req, res) => {

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM products WHERE category='snacks'", function (err, result, fields) {
      if (err) throw err;
      res.render('snacks', { result });
    });
  });

})

app.get('/deserts', (req, res) => {

  con.connect(function(err) {
    
        res.render('deserts');
      
    });

})

app.get('/drinks', (req, res) => {

  con.connect(function(err) {
    
        res.render('drinks');
      
    });

})
app.get('/fastfood', (req, res) => {

  con.connect(function(err) {
    
        res.render('fastfood');
      
    });


})

app.get('/things', (req, res) => {

  con.connect(function(err) {
    
        res.render('things');
      
    });

})


app.get('/test', (req, res) => {

  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.render('test', { result });
      });
    });

})




app.get('/favicon.ico', (req, res) => {
  res.status(204); 
});

//:GET

//POST

  app.post('/createuser', function (request, response, next) {
    console.log(request.body)

      var sql = `INSERT INTO products (product_id, category, title, image, price, info) VALUES ('${request.body.product_id}', '${request.body.category}', '${request.body.title}', '${request.body.image}', '${request.body.price}', '${request.body.info}' )`;
     
      con.query(sql, (error, results, fields) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(results);
        response.send(`Produkty byli vloženi do DB`)
        
      })
      


     
    })

//:POST

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

