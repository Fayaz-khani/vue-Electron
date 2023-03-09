const information = document.getElementById('getData');

information.addEventListener("click", showData)

// function showData() {
  
//   window.api.getObjectFromMain().then((data) => {
//     alert(data)
//         const prop1Elem = document.getElementById('prop1');
//     prop1Elem.innerText = data.temName;

//     const prop2Elem = document.getElementById('prop2');
//     prop2Elem.innerText = data.formTitle;

//     const prop3Elem = document.getElementById('prop3');
//     prop3Elem.innerText = data.logo;

//     const prop4Elem = document.getElementById('prop4');
//     prop4Elem.innerText = data.color;

//     const prop5Elem = document.getElementById('prop5');
//     prop5Elem.innerText = data.label;
//   });

// }

function showData() {
  
  var response = window.api.showData();
    // alert(response.message)
    // Display object data in HTML file
    const prop1Elem = document.getElementById('prop1');
    prop1Elem.innerText = response.message;

    const prop2Elem = document.getElementById('prop2');
    prop2Elem.innerText = data.prop2;

    const prop3Elem = document.getElementById('prop3');
    prop3Elem.innerText = data.prop3;

    const prop4Elem = document.getElementById('prop4');
    prop4Elem.innerText = data.prop4;

    const prop5Elem = document.getElementById('prop5');
    prop5Elem.innerText = data.prop5;

    const prop6Elem = document.getElementById('prop6');
    prop6Elem.innerText = data.prop6;

}




const saveData = document.getElementById('savebtn');
saveData.addEventListener("click", callfun)

var templateArray = {};

function callfun() {

    templateArray.temName = document.getElementById('MyName').value;
    templateArray.formTitle = document.getElementById('formtitle').value;
    templateArray.logo = document.getElementById('formFileSm').value;
    templateArray.label = document.getElementById('label').value;
    templateArray.color = document.getElementById('color').value;
    // alert("called")
    window.api.getData(templateArray);
}

// var templateArray = {};
// function submitted() {
//     templateArray.templateName = document.querySelector("#name").value;
//     templateArray.formTitle = document.querySelector("#formtitle").value;
//     templateArray.color = document.querySelector("#color").value;
//     insertData(templateArray)
// };



// window.api.callThisFun((event,data)=>{
//     document.write(data);
// })

