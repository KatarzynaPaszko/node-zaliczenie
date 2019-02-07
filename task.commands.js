const {
    createTask,
    updateTask,
    deleteTask
} = require('./task');

const {
    getToDoList
} = require('./todolist');


const createCommand = {
    command: 'add:task',
    describe: 'Add new task',
    handler: async args => {
        try {
            const allTasks = getToDoList();
            const task = {
                tag: args.tag,
                title: args.title,
                done: false
            }
            await createTask(task, allTasks);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const deleteCommand = {
    command: 'delete:task',
    describe: 'Delete task',
    handler: async args => {
        try {
            const allTasks = getToDoList();
            await deleteTask(args.id, allTasks);
            console.log('task was deleted');
        } catch (error) {
            console.log(error.message);
        }
    }
};

const updateCommand = {
    command: 'update:task',
    describe: 'Update task data',
    handler: async args => {
        try {
            const allTasks = getToDoList();
            const post = {
                tag: args.tag,
                title: args.title,
                done: JSON.parse(args.done)
            }
            const result = await updateTask(args.id, post, allTasks);
            console.log(`Updated todo task: 
                tag: ${result.tag}, 
                title: ${result.title},
                done: ${result.done}`
            );
        } catch (error) {
            console.log(error.message);
        }
    }
};

const createfolderCommand = {
    command: 'add:folder',
    describe: 'Add new folder',
    handler: async () => {
        try {
            const post = {
                todolist: [],
            }
            await createTask(post);
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = [
    createCommand,
    deleteCommand,
    updateCommand,
    createfolderCommand
];