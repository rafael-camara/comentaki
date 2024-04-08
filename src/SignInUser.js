import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { useAuth } from './auth'
import Form from './elements/Form'
import Snackbar from './elements/Snackbar'

const SignInUser = () => {
  const auth = useAuth()

  const [form, setForm] = useState({
    email: '',
    passwd: '',
  })
  const [emailReset, setEmailReset] = useState('')

  const [openDialog, setOpenDialog] = useState(false)

  const handleClose = () => setOpenDialog(false)

  const handleEmailReset = (evt) => setEmailReset(evt.target.value)

  const handleSendPasswordResetEmail = () => {
    auth.sendPasswordResetEmail(emailReset)

    handleClose()
  }

  if (auth.user !== null) {
    return <Redirect to='/' />
  }

  return (
    <>
      <Grid container spacing={2} direction='row' justifyContent='center'>
        <Grid item md={6}>
          <Box component='div'>
            <Card>
              <CardContent>
                {auth.signInUser.signInUserState.error !== '' && (
                  <Snackbar type='error'>
                    {auth.signInUser.signInUserState.error}
                  </Snackbar>
                )}
                {auth.messageReset.type === 'success' && (
                  <Snackbar type='success'>{auth.messageReset.text}</Snackbar>
                )}
                {auth.messageReset.type === 'error' && (
                  <Snackbar type='error'>{auth.messageReset.text}</Snackbar>
                )}

                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  marginY={3}
                >
                  <Comment color='primary' fontSize='large' />
                </Box>
                <Grid container spacing={2}>
                  <Form form={form} setForm={setForm} />
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Button
                        color='primary'
                        variant='outlined'
                        onClick={() => {
                          auth.signInUser.signInUser(form.email, form.passwd)
                        }}
                      >
                        Entrar
                      </Button>

                      <Button
                        color='primary'
                        onClick={() => setOpenDialog(true)}
                      >
                        Esqueci minha senha
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Redefinir senha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Envie um e-mail de redefinição de senha.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            type='email'
            label='E-mail de usuário'
            fullWidth
            variant='outlined'
            value={emailReset}
            onChange={handleEmailReset}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleSendPasswordResetEmail} color='primary'>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default SignInUser
