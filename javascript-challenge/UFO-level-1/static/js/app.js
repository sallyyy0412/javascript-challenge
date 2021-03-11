// from data.js
var tableData = data;

// YOUR CODE HERE!

// onready
window.onload = function() {
    showData();
};

// get tbody
var tableTbody = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];

// add filter btn onclick Event Listener
document.getElementById("filter-btn").onclick = function() {
    var datetime = document.getElementById("datetime");
    if (datetime.value != undefined && datetime.value != "") {
        showData(datetime.value);
    } else {
        showData();
    }
};

function showData(filterDate) {
    // clear tbody
    tableTbody.innerHTML = "";

    for (var i = 0; i < tableData.length; i++) {
        // filter
        if (filterDate != undefined && filterDate != "" && tableData[i].datetime != filterDate) {
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