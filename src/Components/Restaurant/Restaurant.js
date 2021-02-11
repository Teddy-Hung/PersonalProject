import axios from 'axios'
import React, {userState, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import Header from '../Header/Header'
//Styling Imports
import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import './Restaurant.scss'

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState(props.location.state.element)

    const handleAddRestaurant = () => {
        axios.post('/api/addRestaurant', {userId: props.user_id, restaurantId: restaurant.id})
            .then(() => {
                console.log(props.user_id, restaurant.id)
            })
            .catch(err => console.log(err))
    }

    console.log(props)


    return (
        <div className='restaurant-info'>
            <Header/>
            <section className='restaurant-info-flex-box'>
                <section className='restaurant-info-box-1'>
                    <section className='restaurant-info-container'>
                        <h1>{restaurant.name}</h1>
                        <img className='restaurant-image' src={restaurant.image_url}/>
                        <div className='price-open-container'>
                            {restaurant.is_closed
                            ? (
                                <h4 className='closed'>Closed</h4>
                            )
                            : (
                                <h4 className='open'>Open</h4>
                            )}
                            <div className='price-container'> 
                                <h4 >Price:</h4>
                                <h4 className='price'>{restaurant.price}</h4>
                            </div>
                        </div>
                        <section className='restaurant-address-container'>
                            {restaurant.location.display_address.map((element, index)=> {
                                return <h5 key={index}>{element}</h5>
                            })}
                        </section>                    
                    </section>
                </section>
                <section className='restaurant-info-box-2'>
                    <section className='restaurant-info-container2'>
                        
                    </section>
                </section>
            </section>
            <footer>
                <Button variant='contained' onClick={() => props.history.push('/dash')}>Back</Button>
                <Button variant='contained' onClick={() => handleAddRestaurant()}>Add to list</Button>
            </footer>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.user.user_id
    }
}

export default connect(mapStateToProps)(Restaurant)