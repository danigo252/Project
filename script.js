//const apiUrl with the link to the API that will be used
const apiUrl = "https://date.nager.at/api/v2/publicholidays/2020/US";

//const holidayContainer is use for the casting of the element holidays-container
const holidaysContainer = document.getElementById("holidays-container");

//const showHolidaysBtn is use for the casting of the element show-holidays-btn
const showHolidaysBtn = document.getElementById("show-holidays-btn");

//create of the function .addEvenrListener
showHolidaysBtn.addEventListener("click", () =>  {
    // function fetch to get the apiUrl
    fetch(apiUrl)
        // We get the response with the Json Data
        .then(response => response.json())
        .then(data => {
            // Created const holidays to get all the data in just a variable
            const holidays = data;
            let html = "";
            //We use .forEach to separete elements from data
            holidays.forEach(holiday => {
                //Everytime we get a new element,it creates a render of the data
                html += `
         <div class="holiday">
           <h2>${holiday.name}</h2>
           <p>Date: ${holiday.date}</p>
           <p>Type: ${holiday.type}</p>
         </div>
       `;
            });
            holidaysContainer.innerHTML = html;
            showHolidaysBtn.style.display = "none";
        })
        .catch(error => {
            console.error(error);
            holidaysContainer.innerHTML = "An error occurred while fetching data.";
        });
});
