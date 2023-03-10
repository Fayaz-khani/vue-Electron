const information = document.getElementById('getData');

information.addEventListener("click", showData)

function showData() {
  
  window.api.getObjectFromMain().then((data) => {
    alert(data.length)

  
    // data.forEach(element => {
    //   function GFG_FUN() {
        var cols = [];
         
        for (var i = 0; i < data.length; i++) {
            for (var k in data[i]) {
                if (cols.indexOf(k) === -1) {
                     
                    // Push all keys to the array
                    cols.push(k);
                }
            }
        }
         
        // Create a table element
        var table = document.getElementById("customTable");
         
        // Create table row tr element of a table
        var tr = table.insertRow(-1);
         
        for (var i = 0; i < cols.length; i++) {
             
            // Create the table header th element
            var theader = document.createElement("th");
            theader.innerHTML = cols[i];
             
            // Append columnName to the table row
            tr.appendChild(theader);
        }
         
    //     // Adding the data to the table
        for (var i = 0; i < data.length; i++) {
             
            // Create a new row
            trow = table.insertRow(-1);
            for (var j = 0; j < cols.length; j++) {
                var cell = trow.insertCell(-1);
                 
                // Inserting the cell at particular place
                cell.innerHTML = data[i][cols[j]];
            }
        }
  });

}
