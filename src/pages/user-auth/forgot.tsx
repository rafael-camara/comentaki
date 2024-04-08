import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'

import { Flex } from '@/components/flex'
import { Link } from '@/components/link'
import { ArrowBack } from '@mui/icons-material'
import { Layout } from './layout'

export function Forgot() {
  const [emailReset, setEmailReset] = useState('')

  const handleSendPasswordResetEmail = () => {
    // auth.sendPasswordResetEmail(emailReset)
  }

  return (
    <Layout.Root>
      <Layout.Title>Esqueci minha senha</Layout.Title>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin='dense'
            type='email'
            label='Informe seu e-mail cadastrado'
            fullWidth
            variant='outlined'
            value={emailReset}
            onChange={(evt) => setEmailReset(evt.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant='contained'
            fullWidth
            onClick={handleSendPasswordResetEmail}
          >
            Recuperar minha senha
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Link to='/login'>
            <Flex sx={{ gap: 1 }}>
              <ArrowBack />
              Voltar para o login
            </Flex>
          </Link>
        </Grid>
      </Grid>
    </Layout.Root>
  )
}
