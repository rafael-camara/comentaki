import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Grid, Button, Box, Card, CardContent } from '@material-ui/core'

import { AuthContext } from './auth'
import Form from './elements/Form'
import Snackbar from './elements/Snackbar'

const SignInUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    passwd: ''
  })
  if (auth.user !== null) {
    return <Redirect to='/' />
  }
  return (
    <>
      <Grid container spacing={2} direction='row' justify='center'>
        <Grid item md={6}>
          <Box component='div'>
            <Card>
              <CardContent>
                {auth.signInUser.signInUserState.error !== '' && (
                  <Snackbar>{auth.signInUser.signInUserState.error}</Snackbar>
                )}
                <Grid container spacing={2}>
                  <Form form={form} setForm={setForm} />
                  <Grid item xs={12}>
                    <Button
                      color='primary'
                      variant='outlined'
                      onClick={() => {
                        auth.signInUser.signInUser(form.email, form.passwd)
                      }}
                    >
                      Entrar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
export default SignInUser
