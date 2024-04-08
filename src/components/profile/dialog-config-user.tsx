import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'

import { Flex } from '../flex'

interface DialogConfigUserProps {
  isOpen: boolean
  onClose: () => void
}

export function DialogConfigUser({ isOpen, onClose }: DialogConfigUserProps) {
  const [newDisplayName, setNewDisplayName] = useState('')

  return (
    <Dialog open={isOpen}>
      <DialogTitle id='form-dialog-title'>Configurações</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <DialogContentText>DISPLAY NAME</DialogContentText>

        <Flex direction='column' sx={{ gap: 2, alignItems: 'end' }}>
          <TextField
            label='Display Name'
            fullWidth
            variant='outlined'
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <Flex gap={2}>
            <Button variant='outlined' onClick={onClose}>
              Cancelar
            </Button>
            <Button variant='contained' onClick={onClose}>
              Salvar
            </Button>
          </Flex>
        </Flex>
      </DialogContent>
    </Dialog>
  )
}
