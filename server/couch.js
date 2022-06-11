const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./nano');
const app = express();
const port = 8000;



app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.post('/getdata', (req, res) => {
    console.log("retreived......", req.body.email);


    const object = {
        selector: {

            "email": req.body.email,
            type: 'user'
        }
    }
    dbconnection.fresher.find(object).then((data => {


        console.log("firstname", data);
        res.json(data);

    }))
})
app.post('/postdata', function (req, res) {
    let objectnew = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        type: req.body.type,
    }
    console.log("data from angular....", objectnew);
    dbconnection.fresher.insert(objectnew).then((data) => {
        console.log("Data inserted Successfully", data);
        res.send(data);
    }).catch((err => {
        console.log("error", err);
        res.status(400).send({
            message: err
        })
    }));
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
})

