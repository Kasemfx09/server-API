const express =require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const coursesCollection = require("./Data/fakeData.json");

app.get("/",(req, res)=>{
    res.send("Now server is running");
})

app.get("/allcourses", (req, res)=>{
    res.send(coursesCollection);
})

app.get("/courses/:id", (req, res)=>{
const id = req.params.id;
const getSingleItem =coursesCollection?.find((c)=> c.id==id);
if(!getSingleItem){
    res.send("Don't find course")
}
res.send(getSingleItem);

})
app.listen(Port, ()=>{
console.log("Server is running", Port);
})