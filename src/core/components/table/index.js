import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import styles from './styles'
import {tableDimensions} from '../../constants/table'
import Robot from '../robot'
import Trophy from '../trophy';

export const setUpEmptyTable  = () => {
    const emptyTable = []
    for (let i =0; i < tableDimensions; i++) {
        emptyTable.push([])
        for (let x = 0; x < tableDimensions; x++) {
            emptyTable[i].push('empty');
        }
    }
    return emptyTable
}

const Table = ({robotPosition, trophyPosition}) => {
    const classes = styles()
    const board = setUpEmptyTable()
    if(robotPosition) {
        const {x: robotX, y: robotY} = robotPosition
        board[robotY][robotX] = 'robot'
        if(trophyPosition) {
            const {x: trophyX, y: trophyY} = trophyPosition
            board[trophyY][trophyX] = 'trophy'
        }
    }

    return (
        <Fragment>
            {board && board.map(x =>
                <div className={classes.tableRow}>
                    {x.map(y => 
                    <div className={classes.tableCell}>
                        {y === 'robot' && <Robot/>}
                        {y === 'trophy' && <Trophy/>}
                    </div>
                    )}
                </div>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const { position: robotPosition } = state.robot
    const {position: trophyPosition } = state.trophy

    return {
        robotPosition,
        trophyPosition 
    }
}

export default connect(mapStateToProps)(Table)