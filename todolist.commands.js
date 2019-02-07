const {
    getToDoList
} = require('./todolist');

const getCommand = {
    command: 'get:todolist',
    describe: 'Get todo list and filter it by tag or done',
    handler: async args => {
        try {
            const result = await getToDoList();
            let filtered = result.tasks;

            if (args.done) {
                filtered = filtered.filter(task => {
                    return task.done.toString() == args.done
                });
            }

            if (args.tag) {
                filtered = filtered.filter(task => {
                    return task.tag == args.tag
                });
            }
            
            console.log(filtered);
            return filtered;

        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = [
    getCommand
];