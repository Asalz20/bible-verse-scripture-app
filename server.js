// onSaveBtn will capture the textBox and save the data somewhere (MongoDB)
    // onSave should also pair passage, scripture and textBox together (MongoDb Ids?)
        // These pairings should also be removed from the random generated group
            // Feature to unbind pairing and place them back into the group

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://Asalz20:PTWarr20@cluster0.2aci4.mongodb.net/?retryWrites=true&w=majority'
const app = express();
const cors = require('cors');
const { Db } = require('mongodb');
const PORT = 8080;

// MongoClient.connect(connectionString)
//     .then(client => {
//         console.log('Connected to database')
//         const db = client.db('bible-verse-api')
//         const interpretation = db('interpretation')
//         const bibleRange = db.collection('bible-range')

    

// })
// .catch(err => console.error(err))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/addInterpretation', (req, res) => {
    db.collection('interpretation').insertOne({range: req.body.range, script: req.body.scripture, interpretation: req.body.interpretation })
    .then(result => {
        console.log('Interpretation Added')
        res.redirect('/')
    })
    .catch(err => console.error(err))
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running')
})