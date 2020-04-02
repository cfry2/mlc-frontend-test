import {createUseStyles} from 'react-jss'

const styles = createUseStyles({
    container: {
        display: 'flex',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '150px',
        justifyContent: 'center',
        '& > div:first-child': {
            marginRight: '50px'
        }
    },
    '@global': {
        'body *' : {
            boxSizing: 'border-box',

        },
        body: {
            fontFamily: "'Open Sans', sans-serif",
            background: '#C8ADC0'
        }
    }
})

export default styles