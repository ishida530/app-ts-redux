
const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()
const port = 3001


app.use(fileUpload({
    createParentPath: true
}));
app.use(fileUpload());

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send({
        "title": "Kinoa",
        "date_event": "02-04-22 22:37",
        "description": "Rambo, ostatnia krew xD",
        "type_event": "Kultura",
        "phone_number": "+48 617 515 215",
        "email": "kino@gmail.pl",
        "place_event": "Helios",
        "image": `${Math.floor(Math.random() * 6).toString()}.jpg`,
    })
})

app.post('/add', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json({ status: 1 })
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})