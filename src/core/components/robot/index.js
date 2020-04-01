import React from 'react';
import styles from './styles';
import {moveRobot} from '../../actions/robot'
import {connect} from 'react-redux'

const Robot = ({move}) => {
    const classes = styles()
    return <div className={classes.robot}>

    </div>
}

const mapDispatchToProps = dispatch => ({
    move: (type) => dispatch(moveRobot(type))
})

export default connect(null, mapDispatchToProps)(Robot)