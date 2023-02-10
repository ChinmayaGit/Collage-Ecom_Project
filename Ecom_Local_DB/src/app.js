const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chinu',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log("connection successful"))
.catch((err)=>console.log(err));

const playlistSchema= new mongoose.Schema({
name:String,
type:String,
days:Number,
active:Boolean,
date:{
    type:Date,
    default:Date.now
}

})

const Playlist = new mongoose.model("Playlist",playlistSchema);


