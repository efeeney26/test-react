import React from 'react'
import cs from 'classnames'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    button: (props) => {
        return {
            color: props.cool ? 'red' : 'green',
            backgroundColor: props.cool ? 'green' : 'red',

            [theme.breakpoints.down('md')]: {
                backgroundColor: 'blue',
                color: 'white'
            }
        }
    },
    buttonTest: {
        fontSize: '20px'
    }
}))

const CoolButton = (props) => {
    const classes = useStyles(props)
    return (
        <Button
            variant="contained"
            style={{
                marginTop: '20px'
            }}
            className={cs(classes.button, classes.buttonTest)}
            {...props}
        >
            Button
        </Button>
    )
}

export default CoolButton
