// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  // Check if the input is not empty
  if (taskInput.value.trim() !== "") {
    // Create a new list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));

    // Add a delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
}
