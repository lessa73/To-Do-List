const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

const tasksContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement("div")
    taskItemContainer.classList.add("task-item")

    const taskText = document.createElement("p")
    taskText.innerText = inputElement.value;

    taskText.addEventListener("click", () => handleClick(taskText))

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskText))

    taskItemContainer.appendChild(taskText);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const handleClick = (taskText) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskBeginClicked = task.firstChild.isSameNode(taskText);

        if (currentTaskBeginClicked) {
            task.firstChild.classList.toggle("completed");
        }
    }
};

const handleDeleteClick = (taskItemContainer, taskText) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskBeginClicked = task.firstChild.isSameNode(taskText);

        if (currentTaskBeginClicked) {
            taskItemContainer.remove();
        }
    }
}



const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
    return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => handleAddTask()); 
inputElement.addEventListener("change", () => handleInputChange());