This repository obtains data from the 'Data USA' website, with the API endpoint being "https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year". 
This data had to be parsed, sorted and properly displayed in a table. A script.js file was used to achieve this for
this project. I used fetch instead of XHL, and in my fetch URL, I obtain total populations for each year.
My drilldown is "year" and my order is year in descending order. The largest possible # of years that can 
be displayed at once (limit) is 15, and this is fine since the API only has total population info 
on years from 2013-2023. All the data from the API endpoint is referred to as "data" in my script.js file.
For each row in "data", a tr element is made (to add a row of cells), and year and population cells are created (for each row).
The variable "row" refers to an individual "row" of data, and in "row", the poopulation data is stored in "popCell", and the 
year data is stored in "yearCell". Finally, yearCell and popCell are appended to tr (the new row to be added to the table), and then
tr is appended to the table. If, for any row, data can't be obtained from the API endpoint, a console error "fetch operation failed" is thrown.
The script.js fetch function uses IIFE (runs as soon as it is defined), since it contains a lexical scope enclosed within the grouping operator, and it 
also contains the immediately invoked function expression (()) through which the js engine directly interprets the function.
<img width="1600" height="632" alt="image" src="https://github.com/user-attachments/assets/f29e0dfc-145c-454d-977e-cbe5fdd29681" />
My index.html file just contains basic formatting guidelines for the table and some title info. The website is titled "US Population (Recent Years)".
The left column of my data is "Year", and the right column is "Population". The border is black and is double (2 solid lines on each side).
The text is aligned center in the table, and the padding is 8 px. ALso, my script.js file is linked to my index.html file using <script src="script.js"></script>.
<img width="1183" height="745" alt="image" src="https://github.com/user-attachments/assets/9afce73f-514e-4bc6-a251-4949c45db2fe" />
<img width="415" height="761" alt="image" src="https://github.com/user-attachments/assets/f80e2143-f62c-4130-ae34-d523020aa54b" />
From the image below, it is clear that the measure is "Population", and the drilldown is "Year". The years are listed in descending order (order = year.desc), with a max of 15 (only years 2013-2023 will 
be listed since that's all the API supports).
<img width="1911" height="1041" alt="image" src="https://github.com/user-attachments/assets/211b6e35-3789-442d-92eb-19e2331d0634" />

