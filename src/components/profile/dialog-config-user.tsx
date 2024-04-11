import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useAuth } from '@/context/auth-context'
import { Form } from 'react-router-dom'
import { Flex } from '../flex'

interface DialogConfigUserProps {
  isOpen: boolean
  onClose: () => void
}

const configUserSchema = z.object({
  displayName: z
    .string()
    .min(1)
    .transform((value) => value.replace(/<[^>]+>/g, '')),
})

type ConfigUserForm = z.infer<typeof configUserSchema>

export function DialogConfigUser({ isOpen, onClose }: DialogConfigUserProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfigUserForm>({
    resolver: zodResolver(configUserSchema),
  })

  const { user, updateProfile } = useAuth()

  const displayName =
    user && user.email ? user.displayName || user.email.split('@')[0] : ''

  async function handleChangeDisplayName({ displayName }: ConfigUserForm) {
    const clearText = displayName.replace(/<[^>]+>/g, '')

    await updateProfile({ displayName: clearText })

    onClose()
  }

  useEffect(() => {
    setValue('displayName', displayName)
  }, [])

  return (
    <Dialog open={isOpen}>
      <DialogTitle id='form-dialog-title'>Configurações</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <DialogContentText>DISPLAY NAME</DialogContentText>

        <Form onSubmit={handleSubmit(handleChangeDisplayName)}>
          <Flex direction='column' sx={{ gap: 2, alignItems: 'end' }}>
            <TextField
              label='Display Name'
              fullWidth
              variant='outlined'
              {...register('displayName')}
              error={!!errors.displayName}
              helperText={errors.displayName?.message}
            />
            <Flex gap={2}>
              <Button variant='outlined' onClick={onClose}>
                Cancelar
              </Button>
              <Button type='submit' variant='contained'>
                Salvar
              </Button>
            </Flex>
          </Flex>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
