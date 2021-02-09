const initialState = {
    user: {},
    restaurantList: []
}

const GET_USER = 'GET_USER'
const CLEAR_USER = 'CLEAR_USER'
const GET_RESTAURANTS = 'GET_RESTAURANTS'


export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export function getRestaurants(restaurantArr){
    return{
        type: GET_RESTAURANTS,
        payload: restaurantArr
    }
}

export default function reducer(state = initialState, action){
    const { type, payload } = action

    switch(type){
        case GET_USER:
            return {...state, user: payload}
        case CLEAR_USER:
            return {...state, user: payload}
        case GET_RESTAURANTS:
            return {...state, restaurantList: payload}
        default:
            return state
    }
}