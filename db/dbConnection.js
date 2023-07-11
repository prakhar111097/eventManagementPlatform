require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/northLadderDB"
//mongoDB connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongodb connected at:",uri);
}).catch((e) => {
    console.log(e)
    console.log("mongodb not connected");
});

