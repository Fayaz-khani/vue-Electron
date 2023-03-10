const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  setTemplates: (data) => {
    return ipcRenderer.send('templates', data);
  },

  gettemplate: async () => {
    const response = await ipcRenderer.invoke("get-object");
    return response;
  }

});
