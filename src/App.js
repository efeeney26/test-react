import React from 'react'
import { makeStyles } from '@material-ui/core'

import { SignupForm } from './components'
import './App.css'

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white'
    }
}))

function App () {
    const classes = useStyles()

    return (
        <>
            <SignupForm />
        </>
    )
}

export default App
