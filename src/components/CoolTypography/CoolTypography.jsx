import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core'

const useStyles = makeStyles({
  gutterBottom: {
    color: 'blue',
    marginTop: '1rem'
  }
})

const CoolTypography = ({ title, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  console.log('theme', theme)

  return (
    <Typography
      gutterBottom
      classes={{
        gutterBottom: classes.gutterBottom
      }}
      {...props}
    >
      {title}
    </Typography>
  )
}

CoolTypography.propTypes = {
  title: PropTypes.string
}

export default CoolTypography
