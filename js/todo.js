const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODO_KEYS = "todoStorage";

let todoArray = [];
const savedTodos = localStorage.getItem(TODO_KEYS);

if (savedTodos) {
	const parsedTodos = JSON.parse(savedTodos);
	parsedTodos.forEach(addNewTodo);
}

todoForm.addEventListener("submit", getToDoSubmit);

function getToDoSubmit(event) {
	event.preventDefault();
	const newTodoText = todoInput.value;
	todoInput.value = "";
	const newTodoID = Date.now()
	const newTodoObj = {
		id: newTodoID,
		text: newTodoText
	};
	
	addNewTodo(newTodoObj);
}

function addNewTodo(newTodoObj) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	
	todoArray.push(newTodoObj);
	saveTodos();
	
	li.id = newTodoObj.id;
	span.innerText = newTodoObj.text;
	button.innerText = "X";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
	
	button.addEventListener("click", deleteTodo);
}

function saveTodos() {
	localStorage.setItem(TODO_KEYS, JSON.stringify(todoArray));
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	console.log(li);
	todoArray = todoArray.filter((item) => item.id !== parseInt(li.id));
	li.remove();	
	saveTodos();
}
