import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import { makeStyles } from '@material-ui/core'

import { Header, Main } from './sections'
import { CoolButton, CoolTypography } from './components'
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
      <Grid
        container
        direction="column"
      >
        <Grid
          item
        >
          <Header />
        </Grid>
        <Grid
          item
          container
        >
          <Grid
            item
            xs={false}
            sm={2}
          />
          <Grid
            item
            xs={12}
            sm={8}
          >
            <Main />
          </Grid>
          <Grid
            item
            xs={false}
            sm={2}
          />
        </Grid>
      </Grid>
      <div
        className={classes.buttonContainer}
      >
        <CoolButton
          cool
          color="primary"
        />
        <CoolButton
          color="secondary"
        />
        <CoolButton fullWidth />
        <CoolTypography
          title="Typography"
          variant="h1"
        />
        <Button
          color='primary'
          variant='contained'
        >
          Primary
        </Button>
        <Button
          color='secondary'
          variant="contained"
        >
          Secondary
        </Button>
      </div>
      <Grid
        container
        justify='space-around'
      >
        <Grid item>
          <AcUnitIcon color='primary'/>
        </Grid>
        <Grid item>
          <AcUnitIcon color='secondary'/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
