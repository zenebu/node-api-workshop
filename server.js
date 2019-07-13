const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello there");
})
app.get("/helloClass",(req,res)=>{
    res.send("Hi Class");
})
app.get("/helloMentors",(req,res)=>{
    res.send("Hi Mentors");
})
app.get("/albums",(req,res)=>{
    res.send(albumsData);
})
app.get("/albums/:albumId",(req,res)=>{
    console.log(req.params)
    console.log(req.params.id)
    var id = req.params.albumId
    var album = albumsData.find( album =>{
        return album.albumId === id;
    } );
    res.send(album);
    
   // console.log(req.params.id)
    //console.log("I am getting here");
    //res.send("testing");
})
app.post("/albums",(req,res)=>{
    console.log(req.body)
    albumsData.push(req.body)
    res.send("this is the end of the day")
})
app.delete("/albums/:id",(req, res)=>{
    const newAlbumsData = albumsData.find(album => album.albumId !== req.params.id);
    albumsData.splice(albumsData.indexOf(newAlbumsData),1); 
    res.send("Deleted album" + req.params.id);
})
app.get("/albums/:",function(req, res){
    console.log(req, query)
    if(req.query.genre === undefined){
    res.send(albumsData);
    }
    else{
        let filterTheTest = albumsData.filter(album => album.primaryGenreName === req.query.genre);
res.send(filterTheTest);
    }
   
})
 app.put("/albums/:albumId",function (req, res){
    console.log(req.params.id);
    console.log(req.body);
    var albumId = req.params.albumId;
    var album = albumsData.find((album => album.albumId === albumId))
    albumsData.splice(albumsData.indexOf(album),1);
     res.send(album);
    //const index = albumsData.findindex(album => album.albumId === req.params.id);
    //albumsData[index] = {...albumsData[index], ...req.body};
   // res.send(albumsData[index]);
    //const albumToEdit = albumsData.find(album => album.albumId = req.params.id);
    //albumToEdit ={...albumToEdit,...req.body};
})

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
    }
  ];
  
  app.listen(process.env.PORT || 8080,()=>{
    console.log("my app is running!")
})