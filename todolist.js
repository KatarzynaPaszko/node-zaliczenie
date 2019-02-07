const fs = require('fs');
const { fileName } = require('./const');

const readFile = () => {
    return JSON.parse(fs.readFileSync(`./${fileName}`, 'utf8'));
}



const updateToDoList = data => {
    const stringifiedData = JSON.stringify(data);
    fs.writeFileSync(fileName, stringifiedData);
};

const getToDoList = () => {
    try {
        return readFile();
    } catch (err) {
        fs.writeFileSync(fileName, '{ "tasks": [] }');
        return readFile();
    }
};

module.exports = {
    updateToDoList,
    getToDoList
};