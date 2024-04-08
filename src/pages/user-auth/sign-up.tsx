import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import { Flex } from '@/components/flex'
import { Link } from '@/components/link'
import { Layout } from './layout'

export function SignUp() {
  const [showPasswd, setShowPasswd] = useState(false)

  return (
    <Layout.Root>
      <Layout.Title>Crie sua conta</Layout.Title>

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
          <Button variant='contained' fullWidth size='large' onClick={() => {}}>
            Criar conta
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
