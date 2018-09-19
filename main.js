// Step 1 - Load libraries
const path = require('path');
const express = require('express');

// Step 2 - Create instance of Express
const app = express();

// Step 3 - Define our routes
// GET /image -> text/html
app.use(express.static(path.join(__dirname, 'public')));
app.get('/images', (req, resp) => {
    resp.status(200);
    var filelist = ['chase.jpg','rubble.jpg','sky.jpg'];
    var length = filelist.length;
    var randomNum = Math.floor(Math.random() * Math.floor(length));
    var filename = filelist[randomNum];
    resp.sendfile(path.join(__dirname, 'images', filename));
});


// Step 4 - assign port and Start Server
const PORT = parseInt(process.argv[2]) || 
        parseInt(process.env.APP_PORT) || 3000;

app.listen(PORT, () => {
   console.info(`App started on port ${PORT} at ${new Date()}`);
});
