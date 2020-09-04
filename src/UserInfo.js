import React, { useState, useContext } from 'react'
import { Typography, TextField, Button, Grid } from '@material-ui/core'

import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName)
  const onChange = evt => {
    setNewDisplayName(evt.target.value)
  }
  const save = () => {
    if (newDisplayName !== '') {
      user.updateProfile({ displayName: newDisplayName })
    }
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label='Display Name'
          fullWidth
          variant='outlined'
          value={newDisplayName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button color='primary' variant='outlined' onClick={save}>
          Save display Name
        </Button>
      </Grid>
    </Grid>
  )
}

const UserInfo = () => {
  const auth = useContext(AuthContext)

  if (auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const dn = displayName || alternativeDisplayName

  return (
    <>
      <Typography variant='body1' paragraph>
        Olá {dn}!
      </Typography>
      <FormDisplayName displayName={dn} user={auth.user} />
    </>
  )
}
export default UserInfo
