var todoList = {
      todos: [],
      displayTodos: function() {
        console.log('My Todos', this.todos);
      },
      addTodo: function(todoText) {
        this.todos.push({
          todoText: todoText,
          completed: false  // when add todo to list , wont be completed yet
        });  // use the todos in this object as not available outside
        this.displayTodos(); // use the method displayTodos
      },
      changeTodo: function(position, todoText) {
       // this.todos[position] = newValue;  // use the todos in this object
       this.todos[position].todoText = todoText; // just change todoText, not the whole object
        this.displayTodos();  // use the method displayTodos
      },
      deleteTodo: function(position) {
        this.todos.splice(position, 1);  // use the todos in this object
        this.displayTodos();  // use the method displayTodos
      },
      toggleCompleted: function(position) {
        var todo = this.todos[position]; // create new variable to keep code small
        todo.completed = !todo.completed;  // flip false to true or vice versa
        this.displayTodos();
      }
    };