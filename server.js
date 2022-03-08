const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 80;

var nodemailer = require('nodemailer');

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({
    extended: true
}))

const {
    MongoClient
} = require("mongodb");
const {
    response
} = require('express');

app.use(express.static('public'));
const connectionString = "mongodb+srv://theodore:WataMongodb5@oxygame.nos0n.mongodb.net/oxygameSubscribers?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString);


// function sendAMail(params) {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'x',
//             pass: ''
//         }
//     });

//     var mailOptions = {
//         from: 'y',
//         to: params,
//         subject: 'Sending Email using Node.js',
//         html: '<h1>Welcome</h1><p>That was easy!</p>'
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }



MongoClient.connect(connectionString, {
        useUnifiedTopology: true
    })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('oxygameSubscribers');
        // console.log(db.getHostName());
        const quotesCollection = db.collection('subscribers')

        app.get('/', function (req, res) {
            console.log("hello");
        })

        app.post('/sub', (req, res) => {
            // console.log(req.body);
            newSubs = {
                name: req.body.name,
                gamerTag: req.body.gamerTag,
                eMail: req.body.eMail,
                dateOdBirth: req.body.dateOdBirth,
                validated: false,
                createdAt: new Date().getTime()
            }
            // sendAMail(newSubs.eMail)
            quotesCollection.insertOne(newSubs)
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.error(error))
            res.status(200).send("ok");
        })


    })
    .catch(error => console.error(error))


// main().catch(console.error);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));