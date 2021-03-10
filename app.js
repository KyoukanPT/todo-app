const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();
mongoose.connect("mongodb+srv://<ADMIN>:<PASSWORD>@cluster0.2h90q.mongodb.net/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log.bind(console, "Connected Successfully!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const itemsSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Damn. That's a long to-do list!"
});

const item2 = new Item({
    name: "Let's finish everything!"
});

const warningItems = [item1, item2];

app.get("/", (req, res) => {
    const today = date.getDate();

    Item.find({}, (err, foundItems) => {
        if (foundItems.length > 5000) {
            Item.insertMany(warningItems, (err) => {
                if (err) return err;
                console.log("Successfully added Items");
            });
            res.redirect("/");
        };
        res.render("list", { currentDay: today, itemsList: foundItems });
    });
});

app.post("/", (req, res) => {

    const itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });

    item.save();
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const id = req.body.checkbox;

    Item.findByIdAndRemove(id, (err, docs) => {
        if (err) return console.error(err);
        console.log("Deleted: " + docs);
        res.redirect("/");
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("App is up and running");
});