# commencement-template

## Instructions

- Create an article for each senior's column in Ghost
- Create a spreadsheet to add senior / column info (see `column-info.csv` for structure)
- Download the spreadsheet. Run `node loadData.js` to turn the CSV into a JSON file
- Name all authors' photos `<firstname-lastname>.jpg` and upload them to some `https` file storage (I just created a private article in Ghost and added all the media items inline into the article and then took the media URL from that)
- Add config options at the bottom of `main.js` (year, base media URL (based on where you uploaded the images in the previous step), article url)
- Update the `index.hbs` footer with the names of the column editors/web person
- Run `node main.js`
- Copy all the contents that are outputted in `index.html` into an HTML block in a new article in Ghost and set the "Template" of the article to be "Inline Interactive Full Page"
