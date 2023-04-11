var customUrl
var nr = {}

function coolNr(customNr){
    nr.customNr=customNr
    console.log(customNr)
}

function createUrl(choiceLon, choiceLat, choiceCity){
    var longitude = choiceLon;
    var latitude = choiceLat
    var city = choiceCity
    customNr=nr.customNr
    console.log(customNr)
    console.log("by " + city)
    console.log("Lon: " + longitude + ", Lat: " + latitude +", City: " +city)

    customUrl = "https://api.met.no/weatherapi/nowcast/2.0/complete?lat=" + latitude + "&lon=" + longitude
    console.log(customUrl)
    createCustomUrl(customUrl, city, customNr)  
}

function createCustomUrl(customUrl, city, customNr){
    fetch(customUrl)
        .then(response => {
            let data = response.json().then(data => {
                console.log(data);
                TempCustom= parseFloat(data.properties.timeseries[0].data.instant.details.air_temperature)
                if(customNr==1){
                    CustomTemp.innerText = TempCustom.toLocaleString('en-US') + " °C"
                    customCityName.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde").src="png/" + BildeCustom + ".png";
                } else if(customNr==2){
                    CustomTemp2.innerText = TempCustom.toLocaleString('en-US') + " °C"
                    customCityName2.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde2").src="png/" + BildeCustom + ".png";
                } else if(customNr==3){
                    CustomTemp3.innerText = TempCustom.toLocaleString('en-US') + " °C"
                    customCityName3.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde3").src="png/" + BildeCustom + ".png";  
                } else if(customNr ==4){
                    CustomTemp4.innerText = TempCustom.toLocaleString('en-US') + " °C"
                    customCityName4.innerText = city.toLocaleString('en-US')
                    BildeCustom = String(data.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
                    document.getElementById("CustomBilde4").src="png/" + BildeCustom + ".png";  
                }
                    
                
            })
        }); 
}


