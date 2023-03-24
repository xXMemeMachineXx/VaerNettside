var customUrl
var enhet = {}
var TempCustom = {}


function createUrl(choiceLon, choiceLat, choiceCity, tempFormatNr){
    var longitude = choiceLon;
    var latitude = choiceLat
    var city = choiceCity
    var useTemp = tempFormatNr
    console.log("tall "+ useTemp)

    console.log("Lon: " + longitude + ", Lat: " + latitude +", City: " +city)
   

    customUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=" + latitude + "&lon=" + longitude
    createCustomUrl(customUrl, city)
}

function createCustomUrl(customUrl, city){
   customUrl = customUrl

    console.log("hei " + customUrl)
    fetch(customUrl)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                if(city=="Molde"){
                    MoldeTemp.innerHTML = TempCustom.toLocaleString('en-US') + enhet
                    BildeMolde = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("MoldeBilde").src="png/" + BildeMolde + ".png";
                } else if(city=="Ålesund"){
                    AalesundTemp.innerHTML = TempCustom.toLocaleString('en-US') + enhet
                    BildeAalesund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("AalesundBilde").src="png/" + BildeAalesund + ".png";
                } else if(city == "Kristiansund"){
                    KristiansundTemp.innerHTML = TempCustom.toLocaleString('en-US') + enhet
                    BildeKristiansund = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("KristiansundBilde").src="png/" + BildeKristiansund + ".png";
                } else{
                    CustomTemp.innerHTML = TempCustom.toLocaleString('en-US') + enhet
                    customCityName.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde").src="png/" + BildeCustom + ".png"; 
                }
                
            })
        }); 
}

function tempFormat(useTemp){
    if(useTemp == 1){
        enhet = " K"
        TempCustom= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)+273.15;
    }else if(useTemp == 3){
        TempCustom= parseFloat((data.properties.timeseries[0].data.instant.details.air_temperature)*9/5)+32;
        enhet = " °F"
    } else{
        TempCustom= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
        enhet = " °C"
    }

}


