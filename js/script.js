document.addEventListener("DOMContentLoaded", function(){

    // botao_emergencia = document.getElementById("emergencia");
    // botao_emergencia.addEventListener("mousedown", function(){
    //     botao_emergencia.style.backgroundColor = "red"; 
    // })

    compartilhar1 = document.getElementById("comp1");
    compartilhar2 = document.getElementById("comp2");
    compartilhar3 = document.getElementById("comp3");
    compartilhar4 = document.getElementById("comp4");
    compartilhar1.addEventListener('click', function(){
        if (compartilhar1.innerHTML != "Compartilhado"){
            compartilhar1.innerHTML = "Compartilhado";
            compartilhar.style.backgroundColor = 'blue';

        }
        else {
            compartilhar1.innerHTML = "Compartilhar";
        }})
})