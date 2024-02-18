var inputbox = document.getElementById("inputbox")
var unorder = document.getElementById("unorder")


function add() {
    var create = document.createElement("li")
    create.innerHTML = inputbox.value + "<button onclick=deleteitems(event)>Delete</button>"
    unorder.append(create)
}


function deleteitems(event) {
    event.target.parentElement.remove()
}



