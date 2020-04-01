import React, {Fragment, useState} from 'react'
import { connect } from 'react-redux'
import { moveRobot, setPosition } from '../../actions/robot'



const Controls = ({robotPosition, move, setPosition}) => {
    const {x, y} = robotPosition || {}

    const [positionX, setPositionX] = useState(1);
    const [positionY, setPositionY] = useState(1);

    return (<Fragment>
        <div>
            Status - X: {x+1} Y: {y+1}
        </div>
        <div>
            <button onClick={() => move('up')}>Up</button>
            <button onClick={() => move('down')}>Down</button>
            <button onClick={() => move('left')}>Left</button>
            <button onClick={() => move('right')}>Right</button>
        </div>
        <div>
            <input type="number" min="1" max="5" value={positionX} onChange={(e) => setPositionX(e.target.value)} />
            <input type="number" min="1" max="5" value={positionY} onChange={(e) => setPositionY(e.target.value)}  />
            <button onClick={() => setPosition({x: positionX, y: positionY})}>Set position</button>
        </div>
    </Fragment>)
}

const mapStateToProps = state => {
    const { position } = state.robot
    return {
        robotPosition: position
    }
}

const mapDispatchToProps = dispatch => ({
    move: (type) => dispatch(moveRobot(type)),
    setPosition: (position) => dispatch(setPosition(position)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)