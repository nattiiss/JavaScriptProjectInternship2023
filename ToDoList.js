const inputContainer= document.getElementById("inputContainer");
const listGroup = document.getElementById("listGroup");

function newTask() {
  if (inputContainer.value === "") {
    return;
  }

  const taskId = "task" + (listGroup.childElementCount + 1);

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.id = taskId;  
  li.appendChild(checkbox);

  let label = document.createElement("label");
  label.className = "form-check-label list-text";
  label.setAttribute("for", taskId); 
  label.innerHTML = inputContainer.value;
  li.appendChild(label);

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "&times;";
  li.appendChild(deleteButton);

  listGroup.appendChild(li);

  inputContainer.value = "";
  saveInput();
}

listGroup.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
      const label = e.target.nextElementSibling;
      label.classList.toggle("checked");
      saveInput();
    }
  });

listGroup.addEventListener("click", function (e) {
  if (e.target.className === "delete-button") {
    e.target.parentElement.remove();
    saveInput();
  }
});

function saveInput(){
  localStorage.setItem("data", listGroup.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listGroup.innerHTML = savedData;
  }
}

showTask();
