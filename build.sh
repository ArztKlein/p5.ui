# Create the minified js file
uglifyjs -o src/p5ui.min.js src/p5ui.js

# Copy the minified file into the example folder
cp src/p5ui.min.js example/p5ui.min.js