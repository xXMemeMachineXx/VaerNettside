
const urlAalesund = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=62.472229&lon=6.149482"
const urlKristiansund = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=63.11045&lon=7.72795"
const urlMolde = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=62.7087&lon=6.55346"

var enhet = " °C"

function change(temperaturVariabel) 
{
    useTemp = temperaturVariabel;
    update_tall(useTemp);
}

function update_tall(useTemp) {

    fetch(urlMolde)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                if(useTemp == 1){
                    enhet = " K"
                    TempMolde= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                }else if(useTemp == 3){
                    TempMolde= parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
                    enhet = " °F"
                } else{
                    TempMolde= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
                    enhet = " °C"
                }
                MoldeTemp.innerHTML = TempMolde.toLocaleString('en-US') + enhet

                BildeMolde = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                document.getElementById("MoldeBilde").src="png/" + BildeMolde + ".png";
            })
        });

        fetch(urlAalesund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                if(useTemp == 1){
                    enhet = " K"
                    TempAalesund= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                }else if(useTemp == 3){
                    TempAalesund= parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
                    enhet = " °F"
                } else{
                    TempAalesund= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
                    enhet = " °C"
                }
                AalesundTemp.innerHTML = TempAalesund.toLocaleString('en-US') + enhet

                BildeAalesund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                document.getElementById("AalesundBilde").src="png/" + BildeAalesund + ".png";
            })
        });

        fetch(urlKristiansund)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                if(useTemp == 1){
                    enhet = " K"
                    TempKristiansund= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
                }else if(useTemp == 3){
                    TempKristiansund= parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
                    enhet = " °F"
                } else{
                    TempKristiansund= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
                    enhet = " °C"
                }
                KristiansundTemp.innerHTML = TempKristiansund.toLocaleString('en-US') + enhet

                BildeKristiansund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                document.getElementById("KristiansundBilde").src="png/" + BildeKristiansund + ".png";
            })
        });
}
change();
update_tall();

