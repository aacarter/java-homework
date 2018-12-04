var tableData = data;

// Input table into HTML

var tbody = d3.select("tbody");

tableData.forEach(function (ufo) {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    })
});

//Filter by Date
var button = d3.select("#filter-btn");

button.on("click", function () {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("")
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);
    d3.event.preventDefault();
    filteredData.forEach(function (data) {
        var row = tbody.append("tr");
        Object.entries(data).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value)
        })
    });
});
