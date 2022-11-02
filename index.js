const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(401).send("GET REQUEST!!!")
})

//post request - to create
app.post('/', (req, res) => {
    res.send("POST REQUEST!!!")
})

//put request - to modify
app.put('/', (req, res) => {
    res.send("PUT REQUEST!!!")
})

//patch request - to partially modify
app.patch('/', (req, res) => {
    res.send("PATCH REQUEST!!!")
})

//delete request - to delete
app.delete('/', (req, res) => {
    res.send("DELETE REQUEST!!!")
})


//getProducts API
app.post('/getProducts/:product', (req, res) => {
    console.log(req.params.product);
    //asynchronous
    dataService.getProducts(req.params.product)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.listen(3000, () => {
    console.log("Server started at 3000");
})