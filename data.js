// data.js - Hamari Fake Database

let todos = [
  { id: 1, text: "Learn React",   done: false },
  { id: 2, text: "Understand Props", done: false },
  { id: 3, text: "Build Todo App", done: false },
];

// GET - saare todos lo
export function getTodos() {
  return [...todos]; // nayi copy return karo
}

// POST - naya todo add karo
export function addTodo(newTodo) {
  todos.push(newTodo);
}

// DELETE - ek todo hatao
export function deleteTodo(id) {
  todos = todos.filter(function(todo) {
    return todo.id !== id;
  });
}