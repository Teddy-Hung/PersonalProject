import axios from 'axios'
import React, {userState, useEffect, useState} from 'react'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import { getUser, clearUser } from '../../redux/reducer'
import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import './Profile.scss'

const Profile = (props) => {
    const [username, setUsername] = useState('')
    const [editView, setEditView] = useState(false)

    const handleInput = (val) => {
        setUsername(val)
    }

    const handleEditView = () => {
        setEditView(!editView)
    }

    const updateUsername = () => {
        axios.put(`/api/user/${props.user.user_id}`, { username: username })
            .then(res => {
                props.getUser(res.data[0])
                handleEditView()
                setUsername('')
            })
            .catch(err => console.log(err))
    }

    const handleLogout = () => {
        axios.get('/api/logout')
          .then(() => {
              props.clearUser()
              props.history.push('/')
          })
          .catch(err => console.log(err))
    }

    console.log(props)
    return (
        <section>
           <Header />
           <h1>Welcome</h1>
           {/* <img src={props.user.profile_picture} alt={props.user.username}/> */}
           {!editView
                ? (
                <div>
                    <h2>{props.user.username}</h2>
                    <button onClick={()=> setEditView(!editView)}>Edit Username</button>
                </div>
                )
                : (
                <div>
                    <input
                    value={username}
                    placeholder='New Username'
                    onChange={e => setUsername(e.target.value)} />
                    <button onClick={updateUsername} id='edit-btn'>Submit</button>
                </div>
            )}
            <h2>{props.user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, { getUser, clearUser})(Profile)