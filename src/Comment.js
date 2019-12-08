import React from 'react'
import Time from './Time'
import { Avatar, Box, withStyles, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const styles = {
  boxContainer: {
    margin: '10px 0',
    display: 'flex'
  },
  boxAvatar: {
    margin: '0 7px',
    display: 'inline-table'
  },
  boxContent: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: '8px 10px',
    borderRadius: '18px'
  }
}

const Comment = ({ comment, classes }) => {
  return (
    <Box component='div' className={classes.boxContainer}>
      <Box component='span' className={classes.boxAvatar}>
        <Avatar>
          <AccountCircle />
        </Avatar>
      </Box>
      <Box className={classes.boxContent}>
        <Typography component='span' variant='subtitle2'>
          {comment.user.name}
        </Typography>
        <Typography component='span' variant='caption' color='textSecondary'>
          {' '}
          . <Time timestamp={comment.createdAt} />
        </Typography>
        <Typography variant='body2'>{comment.content}</Typography>
      </Box>
    </Box>
  )
}
export default withStyles(styles)(Comment)
