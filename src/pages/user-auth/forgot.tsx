import { Button, Grid, TextField, Typography } from '@mui/material'
import { Form } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowBack } from '@mui/icons-material'
import { useForm } from 'react-hook-form'

import { Flex } from '@/components/flex'
import { Link } from '@/components/link'
import { useAuth } from '@/context/auth-context'
import { Layout } from './layout'
import { useState } from 'react'

const forgotSchema = z.object({
  email: z.string().email('Email inválido'),
})

type ForgotSchema = z.infer<typeof forgotSchema>

export function Forgot() {
  const [isResetPassword, setIsResetPassword] = useState(true)
  const { resetPassword } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotSchema>({
    resolver: zodResolver(forgotSchema),
  })

  async function handleResetPassword(data: ForgotSchema) {
    try {
      await resetPassword(data.email)

      setIsResetPassword(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout.Root>
      <Layout.Title>Esqueci minha senha</Layout.Title>

      {!isResetPassword ? (
        <Typography variant='body1'>
          Um link de redefinição de senha foi enviado para o seu e-mail
          cadastrado, verifique sua caixa de entrada.
        </Typography>
      ) : (
        <Form onSubmit={handleSubmit(handleResetPassword)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin='dense'
                type='email'
                label='Informe seu e-mail cadastrado'
                fullWidth
                variant='outlined'
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
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
        </Form>
      )}
    </Layout.Root>
  )
}
