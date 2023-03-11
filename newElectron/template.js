const saveData = document.getElementById('savebtn');
saveData.addEventListener("click", callfun)

var templateArray = {};

function callfun() {

    templateArray.Template = document.getElementById('MyName').value;
    templateArray.FromTitle = document.getElementById('formtitle').value;
    templateArray.Logo = document.getElementById('formFileSm').value;
    templateArray.Label = document.getElementById('label').value;
    templateArray.Color = document.getElementById('color').value;
    // alert("called")
    window.api.setTemplates(templateArray);
    // window.api.closeTemplate();

}
