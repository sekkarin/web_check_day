const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const { log } = require("console");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views')
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.render("homepage")
    
}
)
app.post("/day", function (req, res) {
    if (req.method === "POST") {
        let dt = new Date(req.body.date);
        let dateThai = dt.toLocaleDateString("th-Th",{
            year:"numeric",
            month:"long",
            day:"numeric",
            weekday:"long"
        })
        let days=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]
        res.render("displayDay", { date: dateThai|| "No data",day:days[dt.getDay()] || "No date"})

    }
    res.render("homepage")
}
)
app.listen(3000);