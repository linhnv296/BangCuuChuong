let i, j, Multi;
Multi ="<table>";
for (i = 1; i < 10; i++){
    Multi = Multi + "<tr>";
    for (j = 2; j < 10; j++){
        Multi = Multi +"<td>" + j + " x " + i + " = "+ i*j + "</td>";
    }
    Multi = Multi + "</tr>";
}
Multi = Multi + "</table";

document.write(Multi);