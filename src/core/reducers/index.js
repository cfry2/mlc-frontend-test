import { combineReducers } from 'redux'
import table from './table';
import trophy from './trophy';
import robot from './robot';

export default () => combineReducers({
    table,
    trophy,
    robot
})