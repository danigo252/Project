const apiUrl = "https://date.nager.at/api/v2/publicholidays/2020/US";
const holidaysContainer = document.getElementById("holidays-container");
const showHolidaysBtn = document.getElementById("show-holidays-btn");

showHolidaysBtn.addEventListener("click", () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const holidays = data;
            let html = "";
            holidays.forEach(holiday => {
                html += `
         <div class="holiday">
           <h2>${holiday.name}</h2>
           <p>Date: ${holiday.date}</p>
           <p>Type: ${holiday.type}</p>
         </div>
       `;
            });
