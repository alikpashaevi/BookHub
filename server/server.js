import express from "express";
import axios from "axios";


const app = express();
const port = 5000;



app.get("/Home", (req, res) => {
    res.send("WALK Home")
    console.log("Home")
})

app.get("/Explore", (req, res) => {
    res.send("WALK Explore")
    console.log("Explore")
})

app.get("/Notifications", (req, res) => {
    res.send("WALK Notifications")
    console.log("Notifications")
})

app.get("/Messages", (req, res) => {
    res.send("WALK Messages")
    console.log("Messages")
})

app.get("/profile", (req, res) => {
    res.send("WALK Profile")
    console.log("profile")
})

app.get("/Trends", (req, res) => {
    res.send("WALK Trends")
    console.log("Trends")
})

app.get("/Other", (req, res) => {
    res.send("WALK Other")
    console.log("Other")
})

app.get("/profile", (req, res) => {
    res.send("WALK Profile")
    console.log("profile")
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/Home`);
});