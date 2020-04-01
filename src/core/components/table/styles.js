import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    tableRow: {
        display: 'flex',
        flexRow: 'row wrap',
        border: 'solid 1px black',
        borderBottom: 'none',
        width: '500px',
        '&:last-child': {
            borderBottom: 'solid 1px black'
        }
        
    },
    tableCell: {
        width: '100px',
        height: '100px',
        borderRight: 'solid 1px black',
        '&:last-child': {
            borderRight: 'none'
        }
        
    },
    cellWithRobot: {
        background: 'green'
    }
})

export default styles