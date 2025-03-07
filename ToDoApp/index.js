// inputText;
// addButton;
// clearAllBtn;
// taskList;

const inputTextEle = document.getElementById("inputText");

const addBtn = document.getElementById("addButton");

const clearAllButton = document.getElementById("clearAllBtn");

const taskList = document.getElementById("taskList");

function addTask() {
  const taskTest = inputTextEle.value.trim();

  if (taskTest === "") {
    return;
  }
  //create new List item
  const li = document.createElement("li");
  li.textContent = taskTest;
  // create a remove button
  const remvButton = document.createElement("button");

  const removeIcon = document.createElement("img");
  removeIcon.src = "https://cdn-icons-png.flaticon.com/512/2984/2984959.png";
  removeIcon.alt = "Remove";

  removeIcon.classList.add("remove-icon");
  remvButton.appendChild(removeIcon);
  remvButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(remvButton);
  taskList.appendChild(li);

  inputTextEle.value = "";
}

function clearAllTasks() {
  taskList.innerHTML = "";
}

addBtn.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearAllTasks);
