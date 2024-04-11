import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useAuth } from '@/context/auth-context'

import { Flex } from '@/components/flex'
import { Link } from '@/components/link'
import { Layout } from './layout'

const signUpSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUp() {
  const [showPasswd, setShowPasswd] = useState(false)
  const navigate = useNavigate()

  const { signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleSignUp(data: SignUpSchema) {
    try {
      await signUp(data.email, data.password)

      navigate('/', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout.Root>
      <Layout.Title>Crie sua conta</Layout.Title>

      <Form onSubmit={handleSubmit(handleSignUp)}>
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
            <Button type='submit' variant='contained' fullWidth size='large'>
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
      </Form>
    </Layout.Root>
  )
}
