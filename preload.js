const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getData: (data) => {
    return ipcRenderer.send('myeventData', data);
  },
  showData: data,

  getObjectFromMain: async () => {
    const response = await ipcRenderer.invoke("get-object");
    return response;
  }

});


function data() {
  return { message: "Hello from preload!" };
}



// const { contextBridge } = require('electron')

// function getData(templateData) {
//     console.log(templateData);
//     alert(templateData);
// }
// contextBridge.exposeInMainWorld('versions', {
//     getData
// })


