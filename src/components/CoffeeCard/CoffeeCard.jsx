import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const CoffeeCard = (props) => {
  const {
    avatarSrc,
    title,
    subTitle,
    description,
    imgSrc
  } = props

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        image={imgSrc}
        style={{
          height: '150px'
        }}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bye now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  )
}

CoffeeCard.propTypes = {
  avatarSrc: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string
}

export default CoffeeCard
