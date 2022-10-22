__path = process.cwd()
const express = require('express')
const router = express.Router()
const app = express()
const port = process.env.PORT || 3002
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const mainrouter = require('./routes/main'),
       apirouter = require('./routes/api')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({createParentPath:true}))


secure = require('ssl-express-www');

app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter)

app.use('/api', apirouter)

app.listen(port, () => {
    console.log("Server running on port " + port)
})

module.exports = app
