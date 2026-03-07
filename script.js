(async () => { // this code was generated with the help of ChatGPT, especially the code inside the fetch function 
    try {
        fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year&order=Year:desc&limit=15") // a limit of 15 is ok, all populations are USA, and besides populations I only want years
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("populationTable"); // create a table for population data

            data.data.forEach(row => {
                const tr = document.createElement("tr"); // create a new row in the table

                const yearCell = document.createElement("td"); // create a cell for year data
                yearCell.textContent = row.Year; // add the year data to the cell

                const popCell = document.createElement("td"); // create a cell for population data 
                popCell.textContent = Number(row.Population).toLocaleString(); // add the population data to the cell

                tr.appendChild(yearCell); // add year cell and population cells to the tr element (row) created above
                tr.appendChild(popCell);

                table.appendChild(tr); // add the row to the table
            });
        })}
        catch (error) {
            console.error("Fetch operation failed:", error); // send an error to the terminal if population data ever can't be extracted
        }
    })();
