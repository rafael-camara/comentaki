import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'

import { Link } from '@/components/link'
import { Layout } from './layout'

export function SignIn() {
  const [showPasswd, setShowPasswd] = useState(false)

  return (
    <Layout.Root>
      <Layout.Title>Acesse sua conta</Layout.Title>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type='email'
            label='Seu e-mail'
            fullWidth
            variant='outlined'
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
                    {showPasswd ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button color='primary'>
            <Link to='/forgot'>Esqueci minha senha</Link>
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant='contained' fullWidth size='large' onClick={() => {}}>
            Entrar
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Button variant='outlined' fullWidth>
            <Link to='/signup'>
              Ainda não possui uma conta? <br /> Crie uma aqui
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Layout.Root>
  )
}
