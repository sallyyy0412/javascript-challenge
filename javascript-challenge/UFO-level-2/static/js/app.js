// from data.js
var tableData = data;

// YOUR CODE HERE!

// onready
window.onload = function() {
    showData("", "", "", "", "");
};

// get tbody
var tableTbody = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];

// add filter btn onclick Event Listener
document.getElementById("filter-btn").onclick = function() {
    var datetime = document.getElementById("datetime").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var shape = document.getElementById("shape").value;
    if (datetime != "") {
        datetime = formatDate(datetime);
    }
    showData(datetime, city, state, country, shape);
};

function showData(datetime, city, state, country, shape) {
    // clear tbody
    tableTbody.innerHTML = "";

    for (var i = 0; i < tableData.length; i++) {
        console.log(datetime);
        // filter
        if ((datetime != "" && tableData[i].datetime != datetime) || 
            (city != "" && tableData[i].city.indexOf(city) == -1) ||
            (state != "" && tableData[i].state != state) ||
            (country != "" && tableData[i].country != country) ||
            (shape != "" && tableData[i].shape != shape)) {
            continue;
        }

        var newTr = document.createElement("tr");
        var newTd = document.createElement("td");
        // datetime
        newTd.innerText = tableData[i].datetime;
        newTr.append(tableData[i].datetime);
        // city
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].city;
        newTr.append(newTd);
        // state
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].state;
        newTr.append(newTd);
        // country
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].country;
        newTr.append(newTd);
        // shape
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].shape;
        newTr.append(newTd);
        // durationMinutes
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].durationMinutes;
        newTr.append(newTd);
        // comments
        newTd = document.createElement("td");
        newTd.innerText = tableData[i].comments;
        newTr.append(newTd);
        // add tr
        tableTbody.append(newTr);
    }
}

function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = parseInt(datePart[0]), 
    month = parseInt(datePart[1]), 
    day = parseInt(datePart[2]);

    return month+'/'+day+'/'+year;
  }