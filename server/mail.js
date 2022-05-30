const nodemail = require('nodemailer');
var globalemail;
var sender = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'sweetybalaji2000@gmail.com',
        pass: 'B@laji2000'
    }
})
module.exports.getemail = function (object) {

    var composemail = {
        from: 'sweetybalaji2000@gmail.com',
        to: object.email,
        subject: 'node email',
        text: object.firstname + '   ' + object.lastName + object.email + object.password
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
// module.exports = { nano, trainee };