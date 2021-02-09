import axios from 'axios'
import React, {userState, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './Dashboard.scss'

const Dashboard = () => {
    const [userInput, setUserInput] = useState('')
    const [location, setLocation] = useState('')
    const [restaurantList, setRestaurantList] = useState([])
    const [sortBy, setSortBy] = useState('best-match')

    useEffect(() => {
        axios.post('/api/restaurant', {location, sortBy})
            .then(res=> {
                setRestaurantList(res.data)
                console.log('!!!!!!!!!!!!!!!SORT BY:',sortBy)
            })
            .catch(err => console.log(err))
    }, [location, sortBy])


    console.log('restaurantList: ', restaurantList)
    return (
        <section className='dashboard'>
            <Header />
            <input className='location-input' placeholder='Enter Location' onChange={e => setUserInput(e.target.value)}/>
            <button onClick={ () => setLocation(userInput)}>Search</button>
            <section className='dashboard-container'>
                <div className='restaurant-list-container'>
                    {restaurantList.map((element, index) => {
                        return <div>
                            <h2 key={index}>{element.name}</h2>
                        </div>
                    })}
                </div>
                <div className='sort-container'>
                    <h2>Sort by:</h2>
                    <label>
                        <input type="radio"  name='sort-by' onClick={() => setSortBy('best_match')} />
                        <span>Best Match</span>
                    </label>
                    <label>
                        <input type="radio" name='sort-by' onClick={() => setSortBy('rating')} />
                        <span >Rating</span>                    
                    </label>
                    <label>
                        <input type="radio" name='sort-by' onClick={() => setSortBy('review_count')}/>
                        <span >Review Count</span>
                    </label>
                    <label>
                        <input type="radio" name='sort-by' onClick={() => setSortBy('distance')}/>
                        <span >Distance</span>
                    </label>
                    
                    
                </div>
            </section>
        </section>

    )
}

export default Dashboard