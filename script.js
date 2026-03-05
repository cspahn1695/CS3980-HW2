(async () => {
    try {
        fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year&order=Year:desc&limit=15")
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("populationTable");

            data.data.forEach(row => {
                const tr = document.createElement("tr");

                const yearCell = document.createElement("td");
                yearCell.textContent = row.Year;

                const popCell = document.createElement("td");
                popCell.textContent = Number(row.Population).toLocaleString();

                tr.appendChild(yearCell);
                tr.appendChild(popCell);

                table.appendChild(tr);
            });
        })}
        catch (error) {
            console.error("Fetch operation failed:", error);
        }
    })();
