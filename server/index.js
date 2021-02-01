const express = require('express')
const ctrl = require('./controller.js')
const app = express()

app.use(express.json())

//Endpoints
app.get('/api/senses', ctrl.getSenses)
app.post('/api/senses', ctrl.addSenses)
app.put('/api/senses/:id', ctrl.completeSenses)
app.delete('/senses/:id', ctrl.deleteSenses)

const port = 3001
app.listen(port, () => console.log(`Server is listening on port ${port}`))