const { app, BrowserWindow } = require('electron')
const path = require('path')
const { Menu } = require('electron')
const { dialog } = require('electron')
const { type } = require('os')
var Datastore = require('nedb'), db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });
const { ipcMain } = require('electron');

const template = [
  {
    label: 'New Template',
    accelerator: 'CmdOrCtrl+T', 
    click: async () => { createBrowserWindow(); }
  },
  {
    label: 'New Form',
    accelerator: 'CmdOrCtrl+F', 
    click: () => {
      dialog.
        dialog.showMessageBoxSync({
          type: 'info',
          title: 'Create New Form',
          message: 'Hi',
          buttons: ['OK']
        })
    }
  },
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,    height: 600,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  })


// APIS

ipcMain.on('templates', (SendtoDatabase, data) => {
  console.log(data)
  db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });
  if (data != null || data != null) {
       db.insert(data, function (err) {})  
      }
    });
  mainWindow.loadFile('index.html')
}

var array = [];
db.find({}, function (err, data) {
  array = data;
})

ipcMain.handle("get-object", (event) => {
return array;
});

const createBrowserWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 550,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('newTemplate.html');
}
