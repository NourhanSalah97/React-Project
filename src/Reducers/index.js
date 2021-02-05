import {combineReducers} from 'redux'
import { studentsList } from './students-list'
export default combineReducers({
    list:studentsList
})