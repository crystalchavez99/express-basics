import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

// GET
app.get("/", (req, res) =>{
   // res.send("This is a GET request /");
   res.json(data);
});

// GET WITH NEXT
app.get("/next", (req, res, next) =>{
    console.log(`response will be sent by the next function...`);
    next();
}, (req,res)=>{
    res.send("I just set up a route with a second callback function")
});

 // GET WITH PARAMS
app.get("/class/:id", (req, res) =>{
    const studentId = Number(req.params.id);
    const student = data.filter((student) => student.id === studentId);
    res.send(student);
});

app.get("/download", (req, res) =>{
    res.download('images/mountains_2.jpeg');
 });
app.get("/redirect", (req, res) =>{
    res.redirect('https://www.linkedin.com/');
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

// Route Chaining
app.route("/class")
    .get((req,res) =>{
        res.send("This is a GET request /class");
    })
    .post((req,res) =>{
        res.send("This is a POST request /class");
    })
    .put((req,res) =>{
        res.send("This is a PUT request /class");
    })
    .delete((req,res) =>{
        res.send("This is a DELETE request /class");
    });

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
