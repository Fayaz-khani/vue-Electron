const { app, BrowserWindow } = require('electron')
const path = require('path')
const { Menu } = require('electron')
const { dialog } = require('electron')
const { type } = require('os')
var Datastore = require('nedb'), db = new Datastore({ filename: 'D:/NeDB_file/file2', autoload: true });
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

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800, height: 600,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  })
  mainWindow.loadFile('index.html')
}

const createBrowserWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 550,
    autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('newTemplate.html');
  ipcMain.on('templates', (SendtoDatabase, data) => {
    console.log(data)
    if (data != null || data != null) {
      db.insert(data, function (err) { })
    }
    win.close();
    // refreashDB();
  });
}


// APIS

// ipcMain.on('templates', (SendtoDatabase, data) => {
//   console.log(data)
//   db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });
//   if (data != null || data != null) {
//        db.insert(data, function (err) {})  
//       }
//     });

var array = [];
db.find({}, function (err, data) {
  array = data;
})


ipcMain.handle("get-object", (event) => {
  return array;
});

// function refreashDB(){
//   ipcMain.handle("", (event) => {
//     return array;
//   });
// }