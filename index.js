import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("This is a GET request /");
});

app.post("/create", (req,res) =>{
    res.send("This is a POST request /create");
})

app.put("/edit", (req,res) =>{
    res.send("This is a PUT request /edit");
})

app.delete("/delete", (req,res) =>{
    res.send("This is a DELETE request /delete");
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    console.log(data);
})
