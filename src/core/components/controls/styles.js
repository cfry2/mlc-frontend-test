import {createUseStyles} from 'react-jss'

const styles = createUseStyles(theme => ({
    container: {
        width: '300px'
    },
    statusBar: {
        width: '100%',
        textAlign: 'center',
        border: `solid 2px ${theme.colours.black}`,
        padding: '12px 18px',
        fontFamily: theme.fontFamily,
        color: theme.colours.black,
        background: theme.colours.dustStorm,
        borderRadius: '2px',
        marginBottom: '18px',
        fontSize: '20px'
    },
    button: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '16px',
        width: '25%',
        height: '40px',
        fontFamily: theme.fontFamily,
        background: theme.colours.dustStorm,
        color: theme.colours.black,
        border: `solid 2px ${theme.colours.black}`,
        borderRight: 'none',
        '&:last-child': {
            borderRight: `solid 2px ${theme.colours.black}`,
        },
        marginBottom: '18px'

    },
    input: {
        fontFamily: theme.fontFamily,
        width: '65px',
        textAlign: 'center',
        height: '40px',
        border: `solid 2px ${theme.colours.black}`,
        background: theme.colours.slateBlue,
        borderRight:'none',
        fontSize: '16px',
    },
    positionButton: {
        height: '40px',
        cursor: 'pointer',
        fontFamily: theme.fontFamily,
        background: theme.colours.dustStorm,
        color: theme.colours.black,
        border: `solid 2px ${theme.colours.black}`,
        fontSize: '16px',
        padding: '0 39px'
    }
}))

export default styles