import React, {userState, useEffect, useState} from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { getUser, clearUser } from '../../redux/reducer'
import './Profile.scss'

const Profile = (props) => {
    const [username, setUsername] = useState('')
    const [editView, setEditView] = useState(false)

    const toggleEditView = () => {
        
    }

    return (
        <section>
           <Header />
        </section>
    )
}

export default Profile