function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
 
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
 
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
 
function displayTodos() {
    console.log('My todos:', todos);
}
 
var todos = ['item 1', 'item 2', 'item 3'];