
const form = document.getElementById("form");

form.addEventListener("submit", function(event)     {
event.preventDefault()
})





function insertrowTable(trasactionFormData) {

let table = document.getElementById("table");

let newLineRow = table.insertRow(-1);



let indice = document.fomul.miSelect.selectedIndex


let valor = document.fomul.miSelect.options[indice].value


var N1 =parseInt(document.getElementById("N1").value );


 var N2 = parseInt(document.getElementById("N2").value) ;

 var respuesta



 let newCelda = newLineRow.insertCell(0);
 newCelda.textContent = N1;

let newCelda2 =newLineRow.insertCell(1);
newCelda2.textContent = N2;

let newCelda3 = newLineRow.insertCell(2);
newCelda3.textContent = valor;





if (valor == "suma" ) {

  respuesta =  N1 + N2

}

if (valor == "Multiplicacion") {
    
   respuesta = N1 * N2

}


if (valor == "resta" ) {
   respuesta =  N1 - N2
}

if (valor == "division" ) {
    respuesta =  N1 / N2
 }








let newCelda4 = newLineRow.insertCell(3);
newCelda4.textContent = respuesta ;
 
 





} 
