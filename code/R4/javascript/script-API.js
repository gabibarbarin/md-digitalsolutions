var params = [['New York','19ecf7015ca75659ab181524b24868ba','m'], 
["london"], ["Singapur"], ["Shanghai"], ["Mar del Plata"]];

const tableBody = document.getElementById("table-body");

let aux = 0;
let inputCity = "";

realizarLlamado = (i, tableBody, params) =>{
    fetch(`http://api.weatherstack.com/current?&access_key=${params[0][1]}&query=${params[i][0]}
    &units=${params[0][2]}`)
    .then(response => response.json())
    .then(json => {
        let nameCity = json.location.name;
        let country = json.location.country;
        let localtime = json.location.localtime;
        let is_day = json.current.is_day;
        let temperature = json.current.temperature;
        let precip = json.current.precip;
        insertRow(tableBody, nameCity, country, localtime, is_day, temperature, precip);
        })
    .catch(error => console.log(error));
};

insertRow = (tableBody, nameCity, country, localtime, is_day, temperature, precip) =>{
    
    tableBody.innerHTML +=`
        <tr> 
            <td>${nameCity}</td> 
            <td>${country}</td>
            <td>${localtime}</td>
            <td>${is_day}</td>
            <td>${temperature}</td>
            <td>${precip}</td>
        </tr>`
};

newRow = (inputCity, params, aux) =>{
    
    inputCity = document.getElementById("input-city").value;
    aux = params.push([inputCity]);

    realizarLlamado(aux-1, tableBody, params);
    document.getElementById("input-city").value = "";
}

for(let i=0 ; i<=4 ; i++){
    realizarLlamado(i, tableBody, params);
};