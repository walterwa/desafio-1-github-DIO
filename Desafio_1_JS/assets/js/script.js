//criar um botão de "fechar" e colocar ao lado de cada item na lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//clickar no botão de fechar para excluí-lo da lista atual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//colocar um símbolo de "checked" (feito) quando clicarmos em um item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// adicionar o símbolo de feito quando clicado em um item da lista.


function addTarefa() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.append(t);
    console.log(inputValue);

    if (inputValue === '') {
        alert("Você precisa escrever algo.");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
//addTarefa();
// function tarefaNaTela() {
//     capturandoTexto.insertAdjacentHTML("beforeEnd", '<div id="TarefasAdicionadas"></div>');
// }