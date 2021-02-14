var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get("/", function(req, res) {
    res.send("Respota da Home");
   // Você pode trocar a linha acima por:
  // res.render('"index")
  // lembre que pra funcionar a linha acima você tem que 
  // criar o index.ejs dentro da pasta views
})

app.get('/home',function(req,res){
    res.render("home/contato");
});

app.listen(3000,function(){
    console.log("servidor rodando");
});