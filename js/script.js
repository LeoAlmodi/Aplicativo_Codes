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

// ------------------------------------------------------------------------------------------ //

document.addEventListener("DOMContentLoaded", function(){

    // Obtém as referências dos elementos HTML
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const currentMonthYearElement = document.getElementById("current-month-year");
    const dateGridElement = document.getElementById("date-grid");

    // Define a data atual
    let currentDate = new Date();

    // Função para atualizar o calendário
    function updateCalendar() {
    // Limpa o conteúdo do grid de datas
    dateGridElement.innerHTML = "";

    // Obter o mês e ano atual
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Atualiza o elemento de indicação do mês e ano
    currentMonthYearElement.textContent = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "long",
    }).format(currentDate);

    // Obtém o primeiro dia do mês atual
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    // Obtém o número de dias no mês atual
    const numberOfDaysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    // Obtém o dia da semana do primeiro dia do mês
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Adiciona os botões de datas ao grid
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyButton = document.createElement("button");
        dateGridElement.appendChild(emptyButton);
    }

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        const button = document.createElement("button");
        const time = document.createElement("time");
        time.setAttribute(
        "datetime",
        `${currentYear}-${currentMonth + 1}-${i.toString().padStart(2, "0")}`
        );
        time.textContent = i;
        button.appendChild(time);
        dateGridElement.appendChild(button);
    }
    }

    // Atualiza o calendário inicial
    updateCalendar();

    // Evento de clique do botão de mês anterior
    prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
    });

    // Evento de clique do botão de próximo mês
    nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
    });
        
})

// ------------------------------------------------------------------------------------------//
//                                      MODAL

document.addEventListener("DOMContentLoaded", function(){

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
})