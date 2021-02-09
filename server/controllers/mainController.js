const axios = require('axios')
const {BEARER_TOKEN} = process.env

module.exports = {
    getRestaurant: async(req, res) => {
        const {location, sortBy} = req.body
        const baseUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants`
        var config = {
            "headers": { 
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        };

        axios.get(`${baseUrl}&sort_by=${sortBy}&location=${location}`, config)
            .then( restaurants => {
                res.status(200).send(restaurants.data.businesses)})
            .catch(err => console.log(err))



    }
}