const yargs = require('yargs');

const taskCommands = require('./task.commands');
const todolistCommands = require('./todolist.commands');
const serverCommands = require('./server.commands');

taskCommands.forEach(command => yargs.command(command));
todolistCommands.forEach(command => yargs.command(command));
serverCommands.forEach(command => yargs.command(command));

yargs.argv;