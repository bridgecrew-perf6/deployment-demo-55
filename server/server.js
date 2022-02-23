// require express here:
const express = require('express')
// require path here:
const path = require('path') 
// setting up app to use express:
const app = express()

// the '/' is the front page of the website, 
app.get('/', (req, res) => {
// this is how you will structure sending the front end to the website:
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`server be poopin on ${port}`)
})