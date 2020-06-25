const Handlebars = require("handlebars");
const fs = require("fs");

let gradPartial = fs.readFileSync("./templates/graduate.hbs").toString();
Handlebars.registerPartial("columncard", gradPartial);

Handlebars.registerHelper("addClearfixDiv", function (index) {
  if (index % 3 === 0) return true;
  else return false;
});

Handlebars.registerHelper("addClearfixDivCloser", function (index) {
  if (index % 3 === 2) return true;
  else return false;
});

let source = fs.readFileSync("./index.hbs").toString();
let template = Handlebars.compile(source);

// Download CSV from a shared Sheets, turn into JSON via `loadData.js`
let context = JSON.parse(fs.readFileSync("./columnInfo.json"));

function alphaOrder(sr1, sr2) {
  let sr1LastName = sr1["senior-name"].split(" ")[1];
  let sr2LastName = sr2["senior-name"].split(" ")[1];
  if (sr1LastName < sr2LastName) {
    return -1;
  } else {
    return 1;
  }
}

let columnsOrdered = context.columns.sort(alphaOrder);
context.columns = columnsOrdered;
context.mediaUrlBase = "https://northbynorthwestern.com/content/images/2020/06";
context.articleUrl = "https://northbynorthwestern.com/2020-commencement";
context.year = "2020";
const today = new Date();
context.date = `${today.toLocaleString("default", { month: "long" })} ${today.getUTCDate()}`;

var html = template(context);
fs.writeFileSync("./index.html", html.toString());
