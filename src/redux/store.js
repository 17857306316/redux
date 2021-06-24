import {createStore} from 'redux'
import brands from './reducer'

let store = createStore(brands) 

export default store