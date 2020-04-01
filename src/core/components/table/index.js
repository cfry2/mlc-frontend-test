import React, { Fragment } from 'react';
import { connect } from 'react-redux'

const Table = ({board}) => {
    return (
        <Fragment>
            {board && board.map(x =>
                <div>
                    {x.map(y => <div>empty</div>)}
                </div>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const { board } = state.table

    return {
        board
    }
}

export default connect(mapStateToProps)(Table)