const tarefas = [
    { id: 1, titulo: "Tarefa 1", descricao: "Descrição da Tarefa 1", concluida: false },
    { id: 2, titulo: "Tarefa 2", descricao: "Descrição da Tarefa 2", concluida: true },
    { id: 3, titulo: "Tarefa 3", descricao: "Descrição da Tarefa 3", concluida: false },
    { id: 4, titulo: "Tarefa 4", descricao: "Descrição da Tarefa 4", concluida: true },
    { id: 5, titulo: "Tarefa 5", descricao: "Descrição da Tarefa 5", concluida: true },
];

function exibirTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de renderizar

    tarefas.forEach(tarefa => {
        const itemLista = document.createElement("li");
        itemLista.style.color = tarefa.concluida ? "grey" : "black";
        itemLista.style.textDecoration = tarefa.concluida ? "line-through" : "none";

        itemLista.innerHTML = `
            <input type="checkbox" onchange="alternarTarefa(${tarefa.id})" ${tarefa.concluida ? "checked" : ""}>
            <strong>${tarefa.titulo}</strong> - ${tarefa.descricao}
        `;

        listaTarefas.appendChild(itemLista);
    });
}

function alternarTarefa(id) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
    }
}

function atualizarTarefas() {
    exibirTarefas();
}

document.addEventListener("DOMContentLoaded", exibirTarefas); // Renderiza ao carregar a página
