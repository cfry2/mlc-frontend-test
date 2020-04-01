import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import styles from './styles'
import {tableDimensions} from '../../constants/table'
import Robot from '../robot'

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

const Table = ({robotPosition}) => {
    const classes = styles()
    const board = setUpEmptyTable()
    if(robotPosition) {
        const {x, y} = robotPosition
        board[y][x] = 'robot'
    }

    return (
        <Fragment>
            {board && board.map(x =>
                <div className={classes.tableRow}>
                    {x.map(y => 
                    <div className={classes.tableCell}>
                        {y === 'robot' && <Robot/>}
                    </div>
                    )}
                </div>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const { position } = state.robot

    return {
        robotPosition: position
    }
}

export default connect(mapStateToProps)(Table)