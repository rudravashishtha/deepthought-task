document.getElementById("toggle-btn").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  var toggleBtn = document.getElementById("toggle-btn");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    toggleBtn.classList.remove("open");
    this.innerHTML = "&#10095;"; // Change the arrow to point left
  } else {
    sidebar.classList.add("open");
    toggleBtn.classList.add("open");
    this.innerHTML = "&#10094;"; // Change the arrow to point right
    fetchData();
  }
});

function fetchData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayTasks(data.tasks);
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
}

function displayTasks(tasks) {
  const contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = "";

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.task_title;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.task_description;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);

    contentDiv.appendChild(taskDiv);
  });
}
