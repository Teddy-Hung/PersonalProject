import axios from 'axios'
import React, {userState, useEffect, useState} from 'react'
import Header from '../Header/Header'
import './Dashboard.scss'


const Dashboard = () => {
    const [userInput, setUserInput] = useState('')
    const [location, setLocation] = useState('')
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() => {
        axios.get('/api/restaurant')
            .then(res=> setRestaurantList(res.data.businesses))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='dashboard'>
            <Header />
            <section className='dashboard-container'>
                <input className='location-input' placeholder='Enter Location' onChange={e => setUserInput(e.target.value)}/>
                <button onClick={ () => setLocation(userInput)}>Search</button>
                <div className='restaurant-list-container'>
                    {restaurantList.map((element, index) => {
                        return <div>
                            <h2>{element.name}</h2>
                        </div>
                    })}
                </div>
            </section>
        </section>

    )
}

export default Dashboard