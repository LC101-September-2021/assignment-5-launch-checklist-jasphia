// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if(!testInput){
        return "Empty";
    } else if(isNaN(testInput)){
        return "Not a Number";
    } else if(!isNaN(testInput)){
        return "Is a Number";
    }
}


function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    //using validate input function for validation
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" 
    || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {

        return alert("ERROR: All fields are required.");

    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' 
    || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {

        return alert("ERROR: Make sure to enter valid information for each field.");

    } else {
        
        let faultyItems  = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");
        
        //as default txt for html
        pilotStatus.innerHTML = "Ready";
        copilotStatus.innerHTML = "Ready";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";

        //what determines the faulty items div
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        faultyItems.style.visibility = "hidden";

        // if(fuelLevel < 10000 && cargoLevel > 10000){
        //     faultyItems.style.visibility = "visible";
        //     fuelStatus.innerHTML = "Fuel level too low for launch";
        //     cargoStatus.innerHTML = "Cargo mass too high for launch";
        //     launchStatus.style.color = "red";
        //     launchStatus.innerHTML = "Shuttle not ready for launch";
        // }
        
        if (fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for journey";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        };

        if (cargoLevel > 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        };
    };    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    
    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length);
    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;