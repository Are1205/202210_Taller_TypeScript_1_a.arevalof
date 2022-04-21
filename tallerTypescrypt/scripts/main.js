import { series } from 'data.js';
var seriesTBody = document.getElementById('series');
var promedioElem = document.getElementById("promedio");
renderSeriesTable(series);
promedioElem.innerHTML = "".concat(promedio(series));
function renderSeriesTable(pSeries) {
    pSeries.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                                <td>").concat(s.name, "</td>\n                                <td>").concat(s.canal, "</td>\n                                <td>").concat(s.temporadas, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
function promedio(pSeries) {
    var contador = 0;
    var suma = 0;
    pSeries.forEach(function (s) {
        contador++;
        suma = s.temporadas + suma;
    });
    return suma / contador;
}
