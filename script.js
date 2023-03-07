
const urlAalesund = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=62.472229&lon=6.149482"
const urlKristiansund = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=63.11045&lon=7.72795"
const urlMolde = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=62.7087&lon=6.55346"


function change(temperaturVariabel) 
{
    useTemp = temperaturVariabel
    update_tall(useTemp)
    update_symbol()
}

function update_symbol(){
    fetch(urlMolde)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                BildeMolde = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                console.log("Weather:",BildeMolde);
                document.getElementById("MoldeBilde").src="png/" + BildeMolde + ".png";
            })
        });
        fetch(urlAalesund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                BildeAalesund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                console.log("Weather:",BildeAalesund);
                document.getElementById("AalesundBilde").src="png/" + BildeAalesund + ".png";
            })
        });
        fetch(urlKristiansund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                BildeKristiansund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                console.log("Weather:",BildeKristiansund);
                document.getElementById("KristiansundBilde").src="png/" + BildeKristiansund + ".png";
            })
        });

}

function update_tall(useTemp) {

    if(useTemp == 1){
    fetch(urlMolde)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempMolde = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                console.log("TEMP:",TempMolde);
                MoldeTemp.innerHTML = TempMolde.toLocaleString('en-US') + " K"
            })
        });

        fetch(urlAalesund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempAalesund = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                console.log("TEMP:",TempAalesund);
                AalesundTemp.innerHTML = TempAalesund.toLocaleString('en-US') + " K"
            })
        });

        fetch(urlKristiansund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempKristiansund = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                console.log("TEMP:",TempKristiansund);
                KristiansundTemp.innerHTML = TempKristiansund.toLocaleString('en-US') + " K"
            })
        });
    }else if(useTemp == 3){
        fetch(urlMolde)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempMolde = parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)* 9/5)+32;
                console.log("TEMP:",TempMolde);
                MoldeTemp.innerHTML = TempMolde.toLocaleString('en-US') + " °F"
            })
        });

        fetch(urlAalesund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempAalesund = parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
                console.log("TEMP:",TempAalesund);
                AalesundTemp.innerHTML = TempAalesund.toLocaleString('en-US') + " °F"
            })
        });

        fetch(urlKristiansund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempKristiansund = parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
                console.log("TEMP:",TempKristiansund);
                KristiansundTemp.innerHTML = TempKristiansund.toLocaleString('en-US') + " °F"
            })
        });
    } else{
        fetch(urlMolde)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempMolde = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature);
                console.log("TEMP:",TempMolde);
                MoldeTemp.innerHTML = TempMolde.toLocaleString('en-US') + " °C"
            })
        });

        fetch(urlAalesund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempAalesund = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature);
                console.log("TEMP:",TempAalesund);
                AalesundTemp.innerHTML = TempAalesund.toLocaleString('en-US') + " °C"
            })
        });

        fetch(urlKristiansund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempKristiansund = parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature);
                console.log("TEMP:",TempKristiansund);
                KristiansundTemp.innerHTML = TempKristiansund.toLocaleString('en-US') + " °C"
            })
        });
    }
}
change();
update_tall();

