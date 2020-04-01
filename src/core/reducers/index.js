import { combineReducers } from 'redux'
import trophy from './trophy';
import robot from './robot';

export default () => combineReducers({
    trophy,
    robot
})