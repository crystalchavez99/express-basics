import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    console.log(data);
})
