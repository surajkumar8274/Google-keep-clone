const inputele = document.querySelector(".input_title");
const addele = document.querySelector(".add_title");

// Load tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addnewtask = (event) => {
  if (event.keyCode === 13 && inputele.value.trim() !== "") {
    const inp = inputele.value;
    const adde = document.createElement("li");

    adde.textContent = inp;
    addele.appendChild(adde);
    inputele.value = "";

    const iconImg = document.createElement("img");
    iconImg.src = "3669361_delete_ic_icon.png";
    iconImg.alt = "Delete Icon";
    iconImg.classList.add("delete-icon");
    iconImg.style.width = "20px";
    iconImg.style.height = "20px";
    iconImg.style.cursor = "pointer";
    iconImg.style.position = "absolute"; /* Add absolute positioning */
    iconImg.style.top = "5px"; /* Adjust the top position as needed */
    iconImg.style.right = "5px";

    const icImg = document.createElement("img");
    icImg.id = "popup";
    icImg.src = "clipart2613323.png";
    icImg.alt = "Color Icon";
    icImg.classList.add("color-icon");
    icImg.style.width = "20px";
    icImg.style.height = "20px";
    icImg.style.position = "absolute";
    icImg.style.bottom = "5px";
    icImg.style.right = "10px";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const opentext = document.createElement("textarea");

    const addButton = document.createElement("button");
    addButton.textContent = "Add Description";
    adde.appendChild(opentext);
    adde.appendChild(addButton);
    adde.appendChild(iconImg);

    addButton.addEventListener("click", () => {
      const para = document.createElement("p");
      para.textContent = opentext.value;
      adde.appendChild(para);
      addButton.remove();
      opentext.remove();
      adde.appendChild(editButton);
      adde.appendChild(icImg);
      saveTasks();
    });

    editButton.addEventListener("click", () => {
      const para = adde.querySelector("p");
      para.style.display = "none";
      const editInput = document.createElement("textarea");
      editInput.value = para.textContent;

      editButton.style.display = "none";

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      adde.appendChild(editInput);
      adde.appendChild(saveButton);

      saveButton.addEventListener("click", () => {
        para.textContent = editInput.value;
        editInput.remove();
        saveButton.remove();
        para.style.display = "block";
        editButton.style.display = "block";
        saveTasks();
      });
    });

    iconImg.addEventListener("click", () => {
      adde.remove();
      saveTasks();
    });

    icImg.addEventListener("click", () => {
      const randomColor = getRandomColor();
      adde.style.backgroundColor = randomColor;
      saveTasks();
    });

    adde.appendChild(icImg);

    // Save the task to local storage
    savedTasks.push({
      task: inp,
      description: "",
      color: ""
    });
    saveTasks();
  }
};

// Save tasks to local storage
function saveTasks() {
  const tasks = Array.from(addele.children).map((taskItem, index) => {
    const taskText = taskItem.firstChild.textContent;
    const description = taskItem.querySelector("p")?.textContent || "";
    const color = taskItem.style.backgroundColor || "";
    return { task: taskText, description, color };
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
  savedTasks.forEach((task) => {
    const adde = document.createElement("li");
    adde.textContent = task.task;

    const iconImg = document.createElement("img");
    iconImg.src = "3669361_delete_ic_icon.png";
    iconImg.alt = "Delete Icon";
    iconImg.classList.add("delete-icon");
    iconImg.style.width = "20px";
    iconImg.style.height = "20px";
    iconImg.style.cursor = "pointer";
    iconImg.style.position = "absolute";
    iconImg.style.top = "5px";
    iconImg.style.right = "5px";

    const icImg = document.createElement("img");
    icImg.id = "popup";
    icImg.src = "clipart2613323.png";
    icImg.alt = "Color Icon";
    icImg.classList.add("color-icon");
    icImg.style.width = "20px";
    icImg.style.height = "20px";
    icImg.style.position = "absolute";
    icImg.style.bottom = "5px";
    icImg.style.right = "10px";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const opentext = document.createElement("textarea");

    const addButton = document.createElement("button");
    addButton.textContent = "Add Description";
    adde.appendChild(opentext);
    adde.appendChild(addButton);
    adde.appendChild(iconImg);

    addButton.addEventListener("click", () => {
      const para = document.createElement("p");
      para.textContent = opentext.value;
      adde.appendChild(para);
      addButton.remove();
      opentext.remove();
      adde.appendChild(editButton);
      adde.appendChild(icImg);
      saveTasks();
    });

    editButton.addEventListener("click", () => {
      const para = adde.querySelector("p");
      para.style.display = "none";
      const editInput = document.createElement("textarea");
      editInput.value = para.textContent;

      editButton.style.display = "none";

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      adde.appendChild(editInput);
      adde.appendChild(saveButton);

      saveButton.addEventListener("click", () => {
        para.textContent = editInput.value;
        editInput.remove();
        saveButton.remove();
        para.style.display = "block";
        editButton.style.display = "block";
        saveTasks();
      });
    });

    iconImg.addEventListener("click", () => {
      adde.remove();
      saveTasks();
    });

    icImg.addEventListener("click", () => {
      const randomColor = getRandomColor();
      adde.style.backgroundColor = randomColor;
      saveTasks();
    });

    adde.appendChild(icImg);
    addele.appendChild(adde);

    // Set task description and color
    if (task.description) {
      const para = document.createElement("p");
      para.textContent = task.description;
      adde.appendChild(para);
      addButton.remove();
      opentext.remove();
      adde.appendChild(editButton);
      adde.appendChild(icImg);
    }

    if (task.color) {
      adde.style.backgroundColor = task.color;
    }
  });
}

function getRandomColor() {
  const colors = ["#fbbc04", // Yellow
  "#f28b82", // Red
  "#fbbc04", // Orange
  "#fff475", // Mustard
  "#ccff90", // Light Green
  "#a7ffeb", // Teal
  "#cbf0f8", // Light Blue
  "#aecbfa", // Blue
  "#d7aefb", // Purple
  "#fdcfe8", // Pink
  "#e6c9a8", // Light Brown
  "#e8eaed", // Gray
];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

inputele.addEventListener("keyup", addnewtask);
loadTasks();

  

