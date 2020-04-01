import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Table from '../../components/table'
import { setupRobot } from '../../actions/robot'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.setupRobot()
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
    setupRobot: () => dispatch(setupRobot())
})
export default connect(null, mapDispatchToProps)(Main)