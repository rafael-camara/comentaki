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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Link } from '@/components/link'
import { Layout } from './layout'
import { useAuth } from '@/context/auth-context'

const signInSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignIn() {
  const [showPasswd, setShowPasswd] = useState(false)
  const navigate = useNavigate()

  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn(data: SignInSchema) {
    try {
      await signIn(data.email, data.password)

      navigate('/', { replace: true })
    } finally {
    }
  }

  return (
    <Layout.Root>
      <Layout.Title>Acesse sua conta</Layout.Title>

      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type='email'
              label='Seu e-mail'
              fullWidth
              variant='outlined'
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type={showPasswd ? 'text' : 'password'}
              label='Sua senha'
              fullWidth
              variant='outlined'
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
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
            <Button type='submit' variant='contained' fullWidth size='large'>
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
      </Form>
    </Layout.Root>
  )
}
