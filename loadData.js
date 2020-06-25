const Papa = require("papaparse");

const config = {
  delimiter: ",",
  complete: () => console.log("complete"),
  header: true,
};

// Turn downloaded CSV file into JSON
let infoStr = fs.readFileSync("./column-info.csv").toString();
let infoJson = Papa.parse(infoStr, config);
for (let inf of infoJson.data) {
  // Assuming photo files are named <{authorfirstname}-{lastname}>, create a slug to find the author's photo
  let slug = inf["senior-name"].split(" ").join("-").toLowerCase();
  inf["slug"] = slug;
}
fs.writeFileSync("./columnInfo.json", JSON.stringify(infoJson.data));
