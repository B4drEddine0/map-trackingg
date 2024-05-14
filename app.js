
 
 
 // Retrieve coordinates from localStorage
 const storedCoordinates = JSON.parse(window.localStorage.getItem("coordinates"));
 const coordinateList = document.getElementById("coordinateList");

 // Display coordinates in a list
 storedCoordinates.forEach(coord => {
     const listItem = document.createElement("li");
     listItem.textContent = `Longitude: ${coord[0]}, Latitude: ${coord[1]}`;
     coordinateList.appendChild(listItem);
 });

