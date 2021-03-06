const fs = require('fs');
const axios = require('axios');
const URL = 'http://api.quuu.linuxpl.eu/todo/lkkwihhl';
const {
    fileName
} = require('./const');

const upload = () => {
    let localData;
  
    try {
      localData = fs.readFileSync(`./${fileName}`, 'utf8');
      console.log(URL);
      
    } catch (err) {
      fs.writeFileSync(fileName, '{ "tasks": [] }');
      localData = fs.readFileSync(`./${fileName}`, 'utf8');
    }
  
    axios
      .post(URL, localData)
      .then(function({ status }) {
        if (status === 201) {
          console.log("You've successfully uploaded local to do list to server");
        }
      })
      .catch(function(error) {
        console.log('Error');
        console.log(error.message);
      });
  };
  
  const download = async () => {
    const serverData = await axios
      .get(URL)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log('Error');
        console.log(error.message);
      });
  
    return serverData;
  };
  
  module.exports = {
    upload,
    download
  };
  