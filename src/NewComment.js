import React, { useState, useContext } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

import firebase from './firebase'
import { useDatabasePush } from './database'
import { AuthContext } from './auth'

const NewComment = () => {
  const [, save] = useDatabasePush('coments')
  const [comment, setComment] = useState('')
  const auth = useContext(AuthContext)
  if (auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const createComent = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      })
      setComment('')
    }
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows='3'
          value={comment}
          variant='outlined'
          onChange={evt => setComment(evt.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button color='primary' variant='outlined' onClick={createComent}>
          Comentar!
        </Button>
      </Grid>
    </Grid>
  )
}
export default NewComment
