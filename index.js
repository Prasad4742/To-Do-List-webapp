const inputbox = document.getElementById('todo-title');
const datePicker = document.getElementById('date-picker');
const addButton = document.getElementById("toclick");
const pendingTask = document.getElementById('pending');
const completedTask = document.getElementById("complete");

addButton.addEventListener("click", function(event) {
  event.preventDefault();
  const dueDate = datePicker.value;
  const todoTitle = inputbox.value;
  const task = document.createElement("div");
  task.innerHTML = `<br><div>${todoTitle} - ${dueDate} <button id="deletetodo" onclick="deleteTodo(event)">🗑️</button></div>`;
  pendingTask.insertBefore(task, pendingTask.firstChild);
  inputbox.value=""; 
  adjustSectionHeight();
});

function deleteTodo(event) {
  event.preventDefault();
  const task = event.target.parentNode;
  task.innerHTML = `<br>${task.innerHTML.split("<")[0]} <span style="color: green">&#x2714;</span>`;
  task.style.color = "black";
  completedTask.appendChild(task);
  adjustSectionHeight();
}

function adjustSectionHeight() {
  const pendingHeight = pendingTask.scrollHeight;
  const completedHeight = completedTask.scrollHeight;
  const maxHeight = Math.max(pendingHeight, completedHeight);
  pendingTask.style.height = `${maxHeight}px`;
  completedTask.style.height = `${maxHeight}px`;
}

// Call adjustSectionHeight initially to set equal heights
adjustSectionHeight();
