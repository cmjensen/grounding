const express = require('express')
const ctrl = require('./controller.js')
const app = express()

app.use(express.json())

//Endpoints
app.get(`/api/getAnchor/:sense`, ctrl.getAnchor)
app.post(`/api/addAnchor/:sense`, ctrl.addAnchor)
app.put(`/api/updateAnchor/:sense`, ctrl.updateAnchor)
app.delete(`/api/deleteAnchor/:sense`, ctrl.deleteAnchor)

const port = 3001
app.listen(port, () => console.log(`Server is listening on port ${port}`))