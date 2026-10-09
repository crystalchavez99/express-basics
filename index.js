import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get("/", (req, res) =>{
   // res.send("This is a GET request /");
   res.json(data);
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
