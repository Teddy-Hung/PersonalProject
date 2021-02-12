const axios = require('axios')
const {BEARER_TOKEN} = process.env

module.exports = {
    getRestaurant: (req, res) => {
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
            // .catch(err => console.log(err))
    },
    getRestaurantById: (req, res) => {
        const {id} = req.params
        const baseUrl = `https://api.yelp.com/v3/businesses/`
        var config = {
            "headers": { 
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        };
        console.log(`maincontroller getRestaurantById URL: ${baseUrl}${id}`)
        axios.get(`${baseUrl}${id}`, config)
            .then(restaurant => {
                res.status(200).send(restaurant.data)
            })
            // .catch(err => console.log(err))
    },
    addRestaurant: (req, res) => {
        const  {userId, restaurantId, restaurantUrl, restaurantName, restaurantImg, phone,
                rating, reviewCount, address1, city, zipCode, country, state, price} = req.body
        const db = req.app.get('db')

        db.restaurants.add_restaurant(userId, restaurantId, restaurantUrl, restaurantName, restaurantImg, phone,
            rating, reviewCount, address1, city, zipCode, country, state, price)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
    },
    deleteRestaurant: (req, res) => {
        const {restaurantId} = req.params
        const db = req.app.get('db')

        db.restaurants.delete_restaurant(restaurantId)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
        
    },
    getUserList: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        console.log(id)
        db.restaurants.get_user_list(id)
            .then(restaurants => res.status(200).send(restaurants))
            .catch(err => res.status(500).send(err))
    },
    updateUsername: (req, res) => {
        const {id} = req.params
        const {username} = req.body
        const db = req.app.get('db')

        db.users.update_user(username, id)
            .then(user => res.status(200).send(user))
            .catch(err => res.status(500).send(err))
    }
}