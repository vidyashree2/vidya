function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    
    }
    var tasklist = document.getElementById("task-list");
    var listItem = document.createElement("li");
    listItem.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick= function() {
        listItem.remove();
    }
    listItem.appendChild(deleteButton);
    tasklist.appendChild(listItem);
    taskInput.value = "";
}