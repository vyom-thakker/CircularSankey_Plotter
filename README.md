# CircularSankey_Plotter

## Steps to use code (local implementation using nodeJS)

Install NodeJS

Import D3 packages into a new folder (node_modules)

Upload Sankey database into Sankey_XXX.js (Can use 'finalJSConstructor.py XXX.csv' to generate this Sankey_XXX.js)

Replace Sankey_1.js in index.html with Sankey_XXX.js

Run nodejs fileserver.js

Open localhost:8080 and click download SVG


## Alternatively use online JS editors (requires no installations)

Open https://blockbuilder.org/vyom-thakker/4dfeed315f66e3a5ed3b10130e397a9e

Upload your Sankey_XXX.js

Change  <script src="Sankey_minGWP.js"></script> to  <script src="Sankey_XXX.js"></script>

View your sankey at the top screen and take screenshot of sankey (does not allow SVG generation)

