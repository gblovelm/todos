var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);  // use the todos in this object as not available outside
    this.displayTodos(); // use the method displayTodos
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;  // use the todos in this object
    this.displayTodos();  // use the method displayTodos
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);  // use the todos in this object
    this.displayTodos();  // use the method displayTodos
  }
};