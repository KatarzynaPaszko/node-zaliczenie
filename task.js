const {
    updateToDoList
} = require('./todolist');

const findTaskIndex = (taskId, allTasks) => {
    let taskIndex;
    allTasks.tasks.forEach((task, index) => {
        if(task.id == taskId) {
            taskIndex = index;
        }
    });
    return taskIndex;
}

async function createTask(newTask, allTasks) {
    let lastTaskId;
    if(allTasks.tasks.length != 0) {
        lastTaskId = allTasks.tasks[allTasks.tasks.length-1].id;  
    } else {
        lastTaskId = 0
    }
    const newTaskId = lastTaskId + 1;
    newTask.id = newTaskId;
    allTasks.tasks.push(newTask);
    updateToDoList(allTasks);
}



async function updateTask(taskId, task, allTasks) {
    let taskToUpdate = findTaskIndex(taskId, allTasks);
    task.id = taskId;
    allTasks.tasks[taskToUpdate] = task;
    updateToDoList(allTasks);
}

async function deleteTask(taskId, allTasks) {
    let taskIndex = findTaskIndex(taskId, allTasks); 
    allTasks.tasks.splice( taskIndex, 1);
    updateToDoList(allTasks);
}

module.exports = {
    createTask,
    updateTask,
    deleteTask
};