import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Table from '../../components/table'
import { setUpEmptyTable } from '../../actions/table'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.setUpEmptyTable()
    }

    render() {
        return(
            <Fragment>
                <Table/>
            </Fragment>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    setUpEmptyTable: () => dispatch(setUpEmptyTable())
})
export default connect(null, mapDispatchToProps)(Main)