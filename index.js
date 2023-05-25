const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('hello jamil how are you?')
})
app.use(cors())
app.get('/categories', (req, res) => [
    res.send(categories)
])
app.listen(port, () => {
    console.log(`the app is running ${port}`)
})