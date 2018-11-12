import axios from 'axios'
import { AuthTypes } from '../constants'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')    
    dispatch({
        type: AuthTypes.FETCH_USER,
        payload: res.data
    })
}