// Funktion zum Sortieren der Tabelle nach Spalte
function sortTable(columnIndex) {
    var table = document.getElementById("co2Table");
    var rows = table.rows;
    var switching = true;
    var shouldSwitch;
    var dir = "asc"; // Sortierrichtung
    var switchCount = 0;
    
    while (switching) {
        switching = false;
        var rowsArray = Array.prototype.slice.call(rows, 1); // Ignoriere die Kopfzeile
        
        for (var i = 0; i < rowsArray.length - 1; i++) {
            shouldSwitch = false;
            var x = rowsArray[i].getElementsByTagName("TD")[columnIndex];
            var y = rowsArray[i + 1].getElementsByTagName("TD")[columnIndex];
            
            if (dir == "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (dir == "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchCount++;
        } else if (switchCount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}

// Füge die Sortierfunktion zu den Tabellenköpfen hinzu
document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll("#co2Table th");
    headers.forEach(function(header, index) {
        header.addEventListener("click", function() {
            sortTable(index);
        });
    });
});