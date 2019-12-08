import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, Button, Box, Card, CardContent } from '@material-ui/core'

import { AuthContext } from './auth'
import Form from './elements/Form'
import Snackbar from './elements/Snackbar'

const CreateUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    passwd: ''
  })
  if (auth.user !== null) {
    return <Redirect to='/' />
  }
  return (
    <Grid container spacing={2} direction='row' justify='center'>
      <Grid item xs={6}>
        <Box component='div'>
          <Card>
            <CardContent>
              {auth.createUser.createUserState.error !== '' && (
                <Snackbar>{auth.createUser.createUserState.error}</Snackbar>
              )}
              <Grid container spacing={2}>
                <Form form={form} setForm={setForm} />
                <Grid item xs={12}>
                  <Button
                    color='primary'
                    variant='outlined'
                    onClick={() => {
                      auth.createUser.createUser(form.email, form.passwd)
                    }}
                  >
                    Criar Conta
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  )
}
export default CreateUser
