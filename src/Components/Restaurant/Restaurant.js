import React, {userState, useEffect, useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Header from '../Header/Header'

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState(props.location.state.element)

    return (
        <div>
            <Header/>
            <p>Selected Restaurant: {restaurant.name}</p>
            <button onClick={() => props.history.push('/dash')}>Back</button>
        </div>
    )
}

export default Restaurant