
const { app, BrowserWindow } = require('electron')
const path = require('path')

const { Menu } = require('electron')
const { dialog } = require('electron')
const { type } = require('os')
// Define the template for the app menu
const template = [
  {
    label: 'New Template',
    accelerator: 'CmdOrCtrl+T', // Shortcut key
    click: async () => {
      createBrowserWindow();
    }

  }, {
    label: 'New Form',
    accelerator: 'CmdOrCtrl+F', // Shortcut key
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

// Set the menu template
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


const createBrowserWindow = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 550,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },

  });

  win.loadFile('form.html');
}




const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

  // const data = {
  //   prop1: 'value1',
  //   prop2: 'value2',
  //   prop3: 'value3',
  //   prop4: 'value4',
  //   prop5: 'value5',
  //   prop6: 'value6'
  // };
  
  var Datastore = require('nedb'), db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });
  db.find({}, function (err, data) {
    ipcMain.handle("get-object", (event) => {
      const myObject = data;
      return myObject;
    });   
         
        }
        )
  
  
}




app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


const { ipcMain } = require('electron');

var row = {};
ipcMain.on('myeventData', (SendtoDatabase, data) => {

  console.log(data)

  var Datastore = require('nedb'), db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });

  if (data != null || data != null) {

    db.insert(data, function (err) {
     
    }
    )

  }

  // frontEndData()
});

// function frontEndData() {

//   var Datastore = require('nedb'), db = new Datastore({ filename: 'D:/NeDB_file/file', autoload: true });

  

//     db.find({}, function (err, data) {
     
//       ipcMain.webContents.send("callThisFun", data)
//     }
//     )

  

// }


// var row = {name:"data"};
// var Datastore = require('nedb') , db = new Datastore({ filename: 'D:/NeDB_file/datafile', autoload: true });


// var doc = [
//     {
//         title: "MongoDB",
//         description: "added new form",
//         by: "Mobivone"
//     },
//     {
//         name: "Aizaz",
//         job: "developer",
//         experience: "one year",
//     }
// ]

// var row = {
//     name: 'product0022',
//     quantity: 100
// };

// console.log(row);
// db.insert(row, function (err) {
//   console.log(row)
// }
// )
// db.find({}, function (err, insertedDoc) {
//   if (!err)
//     console.log("this is the data of db", insertedDoc);
//   else
//     console.log(err)
// }
// )

// ipcMain.on("callbtn",(event,data)=>{
//   window.webContents.send("getMessage")
// })




