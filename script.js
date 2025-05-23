const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => li.classList.toggle("completed");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  li.append(checkbox, span, editBtn, deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
