const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

const saveTodDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const DeleteAllTodos = () => {
  if (window.confirm("Really Delete All Todos?")) {
    localStorage.removeItem("todos");
    while (toDoList.hasChildNodes) {
      toDoList.removeChild(toDoList.firstChild);
    }
  }
};

const deleteTodo = (event) => {
  event.target.parentNode.remove();
  const id = parseInt(event.target.parentNode.id);
  toDos = toDos.filter((item) => item.id != id);
  saveTodDos();
  console.log(id);
  console.log(toDos);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => {
    paintTodo(item);
  });
}
