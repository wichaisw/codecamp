const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());

app.post("/add-artist", async function(req, res) {
  // ต้องสร้างตามลำดับ เช่น สร้าง address ก่อน เพื่อเอา newAddress.id ไปใช้ใน artist
  const newAddress = await db.address.create( { addr: req.body.addr } );
  const newArtist = await db.artist.create( { 
    // ข้างหน้าตรงกับ ตาราง.js : ข้างหลังตรงกับ postman 
    name: req.body.name,
    phone_number: req.body.phoneNO,
    addressId: newAddress.id
  })
  const newAlbum = await db.album.create( { 
    name: req.body.album.name,
    release_date: req.body.album.release_date,
    artistId: newArtist.id
  })
  const newSong = await db.song.create({
    name: req.body.song.name,
    albumId: newAlbum.id,
    artistId: newArtist.id
  })

  res.send({ newAddress, newAlbum, newArtist, newSong })
});

db.sequelize.sync().then( () => {
  app.listen(3000, () => {
    console.log("server is running on port 3000")
  });
});