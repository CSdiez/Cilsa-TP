const form = document.getElementById("form");
const titleTask = document.getElementById("title-task");
const textTask = document.getElementById("text-task");
const container = document.getElementById("container");



form.addEventListener("submit", (e) => {
  e.preventDefault();

 

  const title = titleTask.value;
  const desc = textTask.value;
  const alert = document.getElementById("alert");

  alert.innerHTML = "";

  console.log(title);
  console.log(desc);

  if (!title) {
    alert.innerHTML = "Ingrese un titulo <br>";
    return
  }
  if (!desc) {
    alert.innerHTML += "Ingrese una descripcion";
    return
  }

  //creamos los elementos
  const newTask = document.createElement("article");
  const newTextContainer = document.createElement("div");
  const newDesc = document.createElement("textarea");
  const newTitle = document.createElement("input");
  const newDiv = document.createElement("div")
  const newErase = document.createElement("button")
  const newComplete= document.createElement("button")


  //Agregamos clases
  newTask.classList.add("art");
  newTextContainer.classList.add("textContainer");
  newDiv.classList.add("btnDiv")

  //agregamos atributos
  newTitle.value = title;
  newTitle.type = "text";
  newTitle.setAttribute("readonly", "readonly");

  newDesc.value = desc;
  newDesc.type = "text";
  newDesc.setAttribute("readonly", "readonly");

  newErase.innerHTML = "Borrar";
  newComplete.innerHTML = "Completada";

  //agregamos los elemetos al HTML
  newTextContainer.appendChild(newTitle);
  newTextContainer.appendChild(newDesc);
  newTask.appendChild(newTextContainer);
  newTask.appendChild(newDiv);
  newDiv.appendChild(newComplete)
  newDiv.appendChild(newErase)
  container.appendChild(newTask);

  //Agregamos evento para cambiar de color al completas
  newComplete.addEventListener("click", () => {
    newTask.classList.add("btnComplete")
    newDesc.classList.add("btnComplete")

  })
  //Evento para borrar
  newErase.addEventListener("click", () => {
    container.removeChild(newTask)

  })
  function limpiar(){
    titleTask.value="";
    textTask.value="";
  }
  limpiar()
});
