function adicionarTarefa() {
    let valorDoInput = document.querySelector("input").value;
    
    if (valorDoInput.trim() === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = valorDoInput + "<span>❌</span>";

    document.querySelector("ul").appendChild(li);
    
    document.querySelector("input").value = "";

    li.querySelector("span").addEventListener("click", () => {
        li.remove(); 
    });
}