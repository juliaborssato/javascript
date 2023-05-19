const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app buton")

const tarefas = ["Lista de física", "Dever de História", "Atualizar redação", "Ir na academia"]

for (const itemtarefa of tarefas){
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemtarefa)
    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}