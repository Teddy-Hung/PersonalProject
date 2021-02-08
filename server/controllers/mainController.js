const axios = require('axios')
const {BEARER_TOKEN} = process.env

module.exports = {
    getRestaurant: async(req, res) => {
        const {location} = req.body
        const baseUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&sort_by=distance&location=`
        var config = {
            "headers": { 
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        };

        axios.get(`${baseUrl}${location}`, config)
            .then( restaurants => {
                // console.log(restaurants.data)
                res.status(200).send(restaurants.data.businesses)})
            .catch(err => console.log(err))



    }
}