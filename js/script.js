document.addEventListener("DOMContentLoaded", function(){

    // ------------------------------------------------------------------------------------------
    //                          BUSCA DE MÉDICOS
    
    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")

    let users = []

    searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
        user.nome.toLowerCase().includes(value) ||
        user.especialidade.toLowerCase().includes(value)
        user.convenio.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
    })

    fetch("json/users.json")
    .then(response => response.json())
    .then(data => {
        users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const name = card.querySelector("[data-name]")
        const specialty = card.querySelector("[data-specialty]")
        const health_insurance = card.querySelector("[data-health_insurance]")
        name.textContent = user.nome
        specialty.textContent = user.especialidade
        health_insurance.textContent = user.convenio
        userCardContainer.append(card)
        return { nome: user.nome, especialidade: user.especialidade, convenio: user.convenio ,element: card }
        })
    })
})
// ------------------------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function(){

    card1_comp = document.getElementById("card1");
    compartilhar2 = document.getElementById("comp2");
    compartilhar3 = document.getElementById("comp3");
    compartilhar4 = document.getElementById("comp4");

    compartilhar2.addEventListener('click', function(){
        if (compartilhar2.innerHTML != "Compartilhado"){
            compartilhar2.innerHTML = "Compartilhado"; 

        }
        else {
            compartilhar2.innerHTML = "Compartilhar";
        }})

    compartilhar3.addEventListener('click', function(){
        if (compartilhar3.innerHTML != "Compartilhado"){
            compartilhar3.innerHTML = "Compartilhado";
            

        }
        else {
            compartilhar3.innerHTML = "Compartilhar";
        }})

        compartilhar4.addEventListener('click', function(){
        if (compartilhar4.innerHTML != "Compartilhado"){
            compartilhar4.innerHTML = "Compartilhado";
            

        }
        else {
            compartilhar4.innerHTML = "Compartilhar";
        }})

})