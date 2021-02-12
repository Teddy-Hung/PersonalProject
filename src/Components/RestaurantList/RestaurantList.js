import React, {userState, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'
import Header from '../Header/Header'
import { getUser } from '../../redux/reducer'
//Styling Imports
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import 'fontsource-roboto'
import './RestaurantList.scss'

const RestaurantList = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [restaurantsForDisplay, setRestaurantsForDisplay] = useState([])

    useEffect(() => {
        const {user_id} = props
        console.log('User ID: ', user_id)

        axios.get(`/api/saved-restaurants/${user_id}`)
            .then((res) => {
                res.data.map((element, index)=> {
                    restaurants.push(element)
                })
            })
            .catch(err => console.log('restaurantList axios get error: ',err))  
            
        console.log('restaurants array is : ', restaurants)
    }, [])

    return(
        <div className='restaurant-list'>
            <Header />
            <section className='restaurant-list-container'>
                
            </section>
            {restaurants.map((element, index)=> {
                return <div>
                        <h2>{element.restaurant_name}</h2>
                    </div>
            })}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.user.user_id
    }
}
export default connect(mapStateToProps, {getUser})(RestaurantList)

//rate-limiting, problem with asynchronous requests when it comes to getting restaurant info from axios requests (error 429). Had to switch to a db approach rather than calling individual api requests for each restaurant