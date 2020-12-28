// Write your JavaScript code here!

window.addEventListener('load', function(){

   let form = document.querySelector('form')
   form.addEventListener('submit', function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector('input[name=fuelLevel]');
      let cargoMass = document.querySelector('input[name=cargoMass]');
      let missionTarget = document.getElementById("missionTarget");

      // condition for all fields 
      // if (pilotName.value === "" || coPilotName.value === "" && fuelLevel.value === "" || cargoMass === ""){
      //    alert('All fields are required')
      // }

      // condition for pilot name here
      if(pilotName.value === ""){
         alert('Pls enter valid pilot name')
      }

      // condition for co pilot name here
      if (coPilotName.value === ""){
         alert("pls enter valid co pilot name")
      }

      // condition for fuel level here
      if(fuelLevel.value === "" || isNaN(fuelLevel.value)){
         alert("pls enter valid fuel level")
      }

      // condition for mission target here
      if(cargoMass.value === "" || isNaN(cargoMass.value)){
         alert("pls enter valid cargo mass")
      }



      let faultyItems = document.getElementById("faultyItems");
      let button = document.getElementById('formSubmit');
      let pilotStatusName = document.getElementById('pilotStatus');
      let coPilotStatusName = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus')
      let cargoStatus = document.getElementById('cargoStatus')
      let launchStatus = document.getElementById('launchStatus');
      //add event listener when submit button is clicked
      button.addEventListener('click', function(){
         // faultyItems.style.visibility = "visible";
         
         pilotStatusName.innerHTML = `${pilotName.value} is ready`;

         coPilotStatusName.innerHTML = `${coPilotName.value} is ready`;


         
         if(pilotName.value.length > 0){
            faultyItems.style.visibility = "visible";
            pilotStatusName.innerHTML = `${pilotName.value} is ready`;
         }
   
         // condition for co pilot name here
         if (coPilotName.value.length  > 0){
            coPilotStatusName.innerHTML = `${coPilotName.value} is ready`;
         }
         //convert string to int
         var fuelValue = Number(fuelLevel.value);
         var massValue = Number(cargoMass.value);

         if(fuelValue >= 10000 ){
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }
         else {
            fuelStatus.innerHTML = "Not enough fuel for journey";
         }
         
         if (massValue <= 10000){
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
         else {
            cargoStatus.innerHTML = "Too much mass for take off";
         }

         if((fuelValue >= 10000 ) && (massValue <= 10000)) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }else {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
      });

      event.preventDefault();
   });

});



window.addEventListener("load", function() {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
     
       // Access the JSON in the response
       response.json().then( function(json) {
         console.log(json)
         const div = document.getElementById('missionTarget');
         div.innerHTML = `
           <ul>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
           </ul>
         `;
       });
   });
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
