//Inicia a aplicação com Express
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors()); 


app.put("/calculadora", function(req, res){
    
    const calcular = req.body.calculo;

    let ResultadoNumber = eval(calcular);
    ResultadoString = ResultadoNumber.toString();
    console.log(ResultadoString);
    res.send(ResultadoString);    

});

app.post("/calculadora", function(req, res){
    
    const calcular = req.body.calculo;

    let ResultadoNumber = eval(calcular);
    ResultadoString = ResultadoNumber.toString();
    console.log(ResultadoString);
    res.send(ResultadoString);    

});

app.listen(4040);