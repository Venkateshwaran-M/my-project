const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./nano');
const app = express();
const port = 8000;
// const nodemail = require('nodemailer');
// const setmail = require('./mail')


process.on('uncaughtException', function (exception) {
    console.log(exception)
})

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.get('/getdata/:id', (req, res) => {
    console.log("retreived......", req.params.id);


    var object = {
        selector: {

            "email": req.params.id
        }
    }
    dbconnection.fresher.find(object).then((data => {


        console.log("firstname", data);
        res.json(data);

    }))
})
app.post('/postdata', function (req, res) {
    var objectnew = {
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
        // });
    }));
});
// app.post('/mail', (request, response, next) => {

//     var object = {
//         firstname: request.body.firstName,
//         lastName: request.body.lastName,
//         email: request.body.email,
//         password: request.body.password,
//     }
//     console.log(object);
// })

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
})

