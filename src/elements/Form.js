import React, { useState } from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

export default function Form({ form, setForm }) {
  const [showPasswd, setShowPasswd] = useState(false)
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }
  return (
    <>
      <Grid item xs={12}>
        <TextField
          type='email'
          label='Seu e-mail'
          fullWidth
          variant='outlined'
          value={form.email}
          onChange={onChange('email')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type={showPasswd ? 'text' : 'password'}
          label='Sua senha'
          fullWidth
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPasswd(!showPasswd)}>
                  {showPasswd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          value={form.passwd}
          onChange={onChange('passwd')}
        />
      </Grid>
    </>
  )
}
