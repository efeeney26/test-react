import React from 'react'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const useStyles = makeStyles({
    typography: {
        flex: 1
    }
})

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <Typography
                    className={classes.typography}
                >
                    This is Header
                </Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
