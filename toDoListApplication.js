// a to do list application to keep track of your tasks
let todoList = [
    { task: 'Do the laundry', completed: false },
    { task: 'Buy groceries', completed: false },
    { task: 'Clean the house', completed: true }
];

//lets add a task
const taskToBeDone = {
    task : "Read A Book",
    completed : false
}

function addTask(task){
    return todoList.unshift(task)
}

// addTask(taskToBeDone)
// console.log(todoList);

//lets update a task
function updateTask(taskTitle){
    for(let task of todoList){
        if(task.task == taskTitle){
            task.completed = true;
            break;
        }
    }
}

// updateTask("Do the laundry")

//lets display the completed tasks
//allow users to filter completed tasks from uncompleted tasks
function filterCompletedTasks(){
    const completedTasks = todoList.filter((task) => {
        return task.completed == true;
    })
    return completedTasks;
}

// console.log(filterCompletedTasks());


//lets delete a task
function deleteTask(){
    todoList = todoList.filter((task) => {
        return task.completed == false;
    })
    return todoList
}


console.log(deleteTask("Clean the house"));














