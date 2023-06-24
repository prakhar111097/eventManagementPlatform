require('./db/dbConnection');
const express = require('express');
const eventRouter = require('./routes/eventRoutes');

const app =express();
const port =3000;

app.use(express.json());
app.use(eventRouter)

app.get('/*', function (req, res) {
    res.status(404).send("Error: Not Found ");
});

// Server is started to listen at 3000 port
app.listen(port,()=>{
    console.log("Server is running at: " + port);
})