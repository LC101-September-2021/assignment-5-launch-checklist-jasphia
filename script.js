// Write your JavaScript code here!

// const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");
//this wont work ^^??

window.addEventListener("load", function() {
    // let faultyItems  = document.getElementById("faultyItems");
    // faultyItems.style.visibility = "hidden";

   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);          //??
   }).then(function () {
       console.log(listedPlanets);          //??
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       //said helper function
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, 
        planet.distance, planet.moons, planet.image);
   });

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
       //requested event p default
       event.preventDefault();
       
       let pilotName = document.querySelector("input[name=pilotName]").value;
       let copilotName = document.querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoMass = document.querySelector("input[name=cargoMass]").value;

       //calling form submit to activate alerts 
       formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);

  });
   
});