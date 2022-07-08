let new_task;
let ul;
let li;
let input;
let span;
let checkbox;

function add_new_task(){      
    new_task = document.getElementById("new_task").value;
    ul       = document.getElementById("ul");
    li       = document.createElement("li");
    input    = document.createElement("input");
    span     = document.createElement("span");


    ul.appendChild(li);
    ul.lastChild.appendChild(input);
    ul.lastChild.lastChild.setAttribute("type", "checkbox");
    ul.lastChild.lastChild.setAttribute("name", "checkbox");
    ul.lastChild.appendChild(span);
    ul.lastChild.lastChild.setAttribute("name", "span");
  //  ul.lastChild.appendChild(document.createTextNode(new_task));
    ul.lastChild.lastChild.innerHTML = new_task;

    document.getElementById("new_task").value = "";
    document.getElementById("new_task").focus();

}