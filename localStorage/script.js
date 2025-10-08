const todos = (() => {
  try {
    return JSON.parse(localStorage.getItem('todos')) || [];
  } catch { return []; }
})();

const input = document.getElementById('todo');
const list  = document.getElementById('list');

function render() {
  list.innerHTML = todos.map(t => `<li>${t}</li>`).join('');
}

function addTodo() {
  const t = input.value.trim();
  if (!t) return;
  todos.push(t);
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
  input.value = '';
}

function clearAll() {
  localStorage.removeItem('todos');
  todos.length = 0;
  render();
}

render();
