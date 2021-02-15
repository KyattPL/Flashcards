const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) console.log(err);
    else console.log(`Connected to the database`);
})

const User = mongoose.model("User", { name: String, email: String, password: String }, "Users");

app.use(express.static(path.join(__dirname, "/front/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/emailInUse', (req, res) => {
    const { email } = req.body;
    User.find({ email: email }, (err, docs) => {
        if (err) return console.log(err);
        if (docs.length != 0) return res.send("User with that email already exists");
        else return res.sendStatus(200);
    });
})

app.post('/signup', (req, res) => {
    const { nick, email, pass } = req.body;

    const newUser = new User({ name: nick, email: email, password: pass });
    newUser.save((err) => {
        if (err) return res.sendStatus(500);
        else return res.sendStatus(200);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})