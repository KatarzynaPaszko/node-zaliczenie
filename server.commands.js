const { upload, download } = require('./server');
const { updateToDoList } = require('./todolist.js')

const uploadToServerCommand = {
    command: 'server:upload',
    describe: 'Upload local data to server',
    handler: () => {
      try {
        upload();
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  
  const downloadFromServerCommand = {
    command: 'server:download',
    describe: 'Download remote data from server and overwrite local data',
    handler: async () => {
      try {
        const serverData = await download();
  
        if (serverData) {
            updateToDoList(serverData);
          console.log('Your local tasks are now the same as on server');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  module.exports = [
    uploadToServerCommand,
    downloadFromServerCommand
  ];