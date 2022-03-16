var express = require("express");
var app = express();
const Protocol = require("mysql/lib/protocol/Protocol");

app.use(express.static('/views'));

var server = app.listen(3000, function() {
    var port = server.address().port
    console.log('Express app listening at localhost:', port)
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(request, response)  {
    response.render("Home_page");
});

app.get("/test", function(request, response)  {
   
    response.render("test");
});

app.get("/la_brasserie", function(request, response)  {
   
    response.render("la_brasserie");
});
app.get("/nos_bieres", function(request, response)  {
   
    response.render("nos_bieres");
});
app.get("/le_concept", function(request, response)  {
   
    response.render("le_concept");
});

app.get("/contact", function(request, response)  {
   
    response.render("contact");
});

app.get("/game", function(request, response)  {
   
    response.render("game");
});
