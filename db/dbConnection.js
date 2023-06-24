const mongoose = require('mongoose');

//mongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/northLadderDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected at: mongodb://127.0.0.1:27107/northLadderDB")
}).catch((e) => {
    console.log(e)
    console.log("mongodb not connected");
});

