var nano = require('nano');
const url = "https://apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx:85e4a7e36372ac1e47c80f4b81a78d62@99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudant.com";
const nanodb = nano(process.env.COUCHDB_URL || url);// connect with couchdb
const trainee = nanodb.use('freshers_sample'); //connect with database 

const nodemail = require('nodemailer');
var globalemail;
var sender = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'venkateshwaran867@gmail.com',
        pass: 'venkat@123'
    }
})
module.exports.getemail = function (object) {

    var composemail = {
        from: 'venkateshwaran867@gmail.com',
        to: object.email,
        subject: 'node email',
        text: 'Hello everyone'
    }
    sender.sendMail(composemail, function (err, res) {
        if (err) {
            console.log("Mail not sent", err);
        }
        else {
            console.log("Mail sent", res);
        }
    })
}
module.exports = { nano, trainee };