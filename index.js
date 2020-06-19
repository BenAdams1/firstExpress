// const app = require('express')()   this is the shorthand way of writing the conststants below
const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
    console.log(request);
    // response.send('Success!')
    response.json({ name: 'Ben', numbers: [1,2,3,4]})
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    res.send(`The user id is: ${req.params.id}`)
})

app.get('/greeting/:timeOfDay/:name', (req, res) => {
    console.log(req.params);
    let { timeOfDay, name} = req.params
    res.send(`Good ${timeOfDay}, ${name}`)
})

// using queries  ('/') the backslash is the URL as seen below
app.get('/schmancy', (req, res) => {
    console.log(req.query)
    let { fancy } = req.query
    let response = 'This is a normal response.'
    if (Boolean(fancy)) {
        response = response.split(' ').map(word => `schm${word.toLowerCase()}`).join(' ')
    }
    res.send(response)
})
// serving files
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/about.html`)
})






const PORT = process.env.PORT || 5000
app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`)
});
