import express from "express";
import axios from "axios";


const app = express();
const port = 5000;



app.get("/", (req, res) => {

})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});