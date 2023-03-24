var customUrl



function createUrl(choiceLon, choiceLat, choiceCity, tempHovedbyerNr){
    var longitude = choiceLon;
    var latitude = choiceLat
    var city = choiceCity
    var useTemp = tempHovedbyerNr
    console.log("by " + city)
    console.log("Lon: " + longitude + ", Lat: " + latitude +", City: " +city)

    customUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=" + latitude + "&lon=" + longitude
    if(city == "Ålesund" || city ==  "Molde" || city ==  "Kristiansund"){
        tempHovedbyer(customUrl, city, useTemp)
    } else{
        createCustomUrl(customUrl, city)
    }
    
}

function createCustomUrl(customUrl, city){
    useTemp=2
    fetch(customUrl)
        .then(response => {
            let data = response.json().then(data => {
                    console.log(data);
                    TempCustom= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
                    enhet = " °C"
                    CustomTemp.innerText = TempCustom.toLocaleString('en-US') + enhet
                    customCityName.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde").src="png/" + BildeCustom + ".png";
                
            })
        }); 
}

function tempHovedbyer(useTemp){
    var moldeUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=63.11045&lon=7.72795" 
    var KristiansundUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=63.11045&lon=7.72795"
    var AalesundUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=62.4723&lon=6.1549"
    fetch(moldeUrl)
        .then(response => {
            let data = response.json().then(data => {
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
    
        fetch(AalesundUrl)
        .then(response => {
            let data = response.json().then(data => {
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

        fetch(KristiansundUrl)
        .then(response => {
            let data = response.json().then(data => {
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


