import React from 'react'
import { useDatabase } from './database'
import Comment from './Comment'
import {
  Box,
  CircularProgress,
  withStyles,
  Typography
} from '@material-ui/core'

const styles = {
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Comments = ({ classes }) => {
  const data = useDatabase('coments')
  if (!data) {
    return (
      <Box m={3} className={classes.boxContainer}>
        <Typography variant='body1'>
          Nenhum comentário enviado até o momento.
        </Typography>
      </Box>
    )
  }
  const ids = Object.keys(data)
  if (ids.length === 0) {
    return (
      <Box m={3} className={classes.boxContainer}>
        <CircularProgress />
      </Box>
    )
  }
  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />
  })
}
export default withStyles(styles)(Comments)
