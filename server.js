const express = require("express");
const db = require("./db/bikes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/bikes",  async function(req,res) {
const getBikes = await db.getAllBikes();
res.json({getBikes});
    });

app.post("/bikes" , async function(req,res) {
    const id =  await db.createBike(req.body);
    const postDetails = req.body;
    res.json({success : true,data : postDetails });
    });
    
    app.get("/bikes/:id",  async function(req,res) {
        const getBike = await db.getBike(req.params.id);
        res.json({data:getBike});
        }); 


    app.patch("/bikes/:id" ,  async function(req,res) {
    const bikeUpdate =  await db.updateBike(req.params.id,req.body);
    res.json({bikeUpdate});
    });
    
    app.delete("/bikes/:id" , async function(req,res) {
    const bikeDelete = await db.deleteBike(req.params.id);
    res.json({success : true});
    
    });
    
app.listen(3000, function() {
    console.log("server is running on port number 3000");
});
