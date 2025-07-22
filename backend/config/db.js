const mongoose = require("mongoose");

//DB password - o5bfGyuleGXgliJl

const dburl = "mongodb+srv://wgucgjayarathna9898:o5bfGyuleGXgliJl@cluster0.fakpgfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connection = async() => {
    try{
        await mongoose.connect(dburl);
        console.log("MongoDB connected");
    }catch(e) {
        console.error(e.message);
        process.exit();
    }


};

module.exports = connection;