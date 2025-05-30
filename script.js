// Create container
const mainDiv = document.createElement("div");
mainDiv.className = "main-container";
document.body.appendChild(mainDiv);

// Input & Add button
const inputDiv = document.createElement("div");
const inputData = document.createElement("input");
inputData.type = "text";
inputData.placeholder = "Enter task";

const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.addEventListener("click", handleAddTask);

inputDiv.appendChild(inputData);
inputDiv.appendChild(addBtn);
mainDiv.appendChild(inputDiv);

// Task list container
const ul = document.createElement("ul");
mainDiv.appendChild(ul);

// Function to handle adding tasks
function handleAddTask() {
  const taskText = inputData.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "li-listed";

  const span = document.createElement("span");
  span.innerText = taskText;

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.className = "icon-btn edit";
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
      span.innerText = newTask.trim();
    }
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.className = "icon-btn delete";
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  ul.appendChild(li);

  inputData.value = ""; // Clear input
}
