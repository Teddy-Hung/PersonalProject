require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      axios = require('axios'),
      authCtrl = require('./controllers/authController'),
      mainCtrl = require('./controllers/mainController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, BEARER_TOKEN} = process.env
const port = SERVER_PORT || 7777
const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(port, () => console.log(`Listening on port ${port}`))
})

//Auth Endpoints
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)



const herokuApp = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&sort_by=distance&location=San Diego'
var config = {
    "headers": { 
        method: 'GET',
        Authorization: `Bearer ${BEARER_TOKEN}`
    }
};

//API Endpoints
app.get('/api/restaurant', (location) => {
    axios.get(baseUrl, config)
        .then( res => {
        console.log(JSON.stringify(res.data.businesses))

        // app.post('/api/restaurant', res.data.businesses)
        // .then( postRes=> console.log(JSON.stringify(postRes.data.businesses)))
        // .catch(err=> console.log(err))
    })
    .catch(err => console.log('Not connecting to API correctly: '+err))

})

