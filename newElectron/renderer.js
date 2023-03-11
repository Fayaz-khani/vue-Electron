window.api.gettemplate().then((templatedata) => {
    alert(templatedata.length)

    var cols = [];

    for (var i = 0; i < templatedata.length; i++) {
        for (var k in templatedata[i]) {
            if (cols.indexOf(k) === -1) {
                cols.push(k);
            }
        }
    }
    var table = document.getElementById("customTable");
    var tr = table.insertRow(-1);
    for (var i = 0; i < cols.length; i++) {
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];
        tr.appendChild(theader);
    }
    for (var i = 0; i < templatedata.length; i++) {
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
            cell.innerHTML = templatedata[i][cols[j]];
        }
    }
});
