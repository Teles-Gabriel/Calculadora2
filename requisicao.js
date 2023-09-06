function insert(num)
{
    var numero = document.getElementById('numero').value;
    document.getElementById('numero').value = numero + num;
}
function clean()
{
    document.getElementById('numero').value = "";
}
function back()
{
    var resultado = document.getElementById('numero').value;
    document.getElementById('numero').value = resultado.substring(0, resultado.length -1);
}



function calcular(){
    let entrada = document.getElementById('numero');
    let calculo = entrada.value;
    let objetoJSON = {"calculo":`${calculo}`};



    axios.post('http://localhost:4040/calculadora', objetoJSON)
      .then(function (response) {
        //console.log(response.data);
        document.getElementById('numero').value = response.data;

      })
      .catch(function (error) {
        console.log(error);
      });
};

