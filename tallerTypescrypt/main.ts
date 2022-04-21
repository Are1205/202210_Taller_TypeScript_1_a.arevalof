import {Serie} from 'serie.js';
import {series} from 'data.js';


let seriesTBody: HTMLElement = document.getElementById('series')!;
const promedioElem: HTMLElement = document.getElementById("promedio")!;
renderSeriesTable(series);
promedioElem.innerHTML = `${promedio(series)}`;

function renderSeriesTable(pSeries:Serie[])
{
    console.log('entre a render');
    pSeries.forEach(s =>{
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                                <td>${s.name}</td>
                                <td>${s.canal}</td>
                                <td>${s.temporadas}</td>`;
        seriesTBody.appendChild(trElement);
    });
}


function promedio(pSeries:Serie[]):number{
    console.log('entre a promedio');
    let contador:number = 0;
    let suma:number = 0;
    pSeries.forEach(s =>{
       contador  ++;
       suma = s.temporadas + suma;
    });

    return suma/contador;
}
