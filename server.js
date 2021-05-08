//---------------- Truc Vo ----------------
//--------- Matrikelnummer: 2575005 ---------

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

app.listen(3000, function(){
    console.log("server startet on port 3000");
});

// Verbingung mit der Formular.HTML
app.get("/login", function(req, res){
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/registrieren", function(req, res){
    res.sendFile(__dirname + "/views/registrieren.html");
});

// Tabelle von der Verwaltung des Benutzernamen und Passworts
let benutzer1 = {
    benutzername: "Alice",
    passwort: "§$Ỵ/912v"
}

let benutzer2 = {
    benutzername: "Bob",
    passwort: "secret"
}

let benutzer3 = {
    benutzername: "Carla",
    passwort: "12333333"
}

let benutzer4 = {
    benutzername: "David",
    passwort: "divaD"
}

let benutzerInfo = [];
benutzerInfo.push(benutzer1);
benutzerInfo.push(benutzer2);
benutzerInfo.push(benutzer3);
benutzerInfo.push(benutzer4);

app.post("/loginInfo", function(req, res){
    const name = req.body.name;
    const pass = req.body.pass;
    res.render("loginEJS", {"benutzerInfo": benutzerInfo, "name": name, "pass": pass});
});

app.post("/registrierenInfo", function(req, res){
    const registriername = req.body.registriername;
    const registrierpass = req.body.registrierpass;
    const passWiederholen = req.body.passWiederholen;
    let neuBenutze = req.body.neuBenutze;
    res.render("registrierenEJS", {"registriername": registriername, "registrierpass": registrierpass, "passWiederholen": passWiederholen, "benutzerInfo": benutzerInfo, "neuBenutze": neuBenutze});
});


