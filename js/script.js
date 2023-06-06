document.addEventListener("DOMContentLoaded", function(){

    // botao_emergencia = document.getElementById("emergencia");
    // botao_emergencia.addEventListener("mousedown", function(){
    //     botao_emergencia.style.backgroundColor = "red"; 
    // })

    // compartilhar1 = document.getElementById("comp1");
    card1_comp = document.getElementById("card1");
    compartilhar2 = document.getElementById("comp2");
    compartilhar3 = document.getElementById("comp3");
    compartilhar4 = document.getElementById("comp4");
    // compartilhar1.addEventListener('click', function(){
    //     if (compartilhar1.innerHTML != "Compartilhado"){
    //         compartilhar1.innerHTML = "Compartilhado";


    //     }
    //     else {
    //         compartilhar1.innerHTML = "Compartilhar";
    //     }})
    
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


// ---------------------------------------------------------------------------------------------

    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")

    let users = []

    searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
    })

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)
        return { name: user.name, email: user.email, element: card }
        })
    })
})