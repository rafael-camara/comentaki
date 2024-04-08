import { ChangeEvent, useState } from 'react'
import { Send } from '@mui/icons-material'
import {
  Box,
  BoxProps,
  IconButton,
  InputBase,
  InputBaseProps,
} from '@mui/material'

import { Flex } from '../flex'
import { useDatabase } from '@/hooks/useDatabase'
import { IComment } from '@/types/comment'

export function Footer() {
  const [comment, setComment] = useState('')

  const { saveData } = useDatabase<IComment>('comments')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // limpar tags HTML
    const clearText = e.target.value.replace(/<[^>]+>/g, '')

    setComment(clearText)
  }

  function handleSubmit() {
    console.log(comment)
  }

  function handleSave() {
    const comment: IComment = {
      content: 'hello world',
      createdAt: new Date(),
      user: {
        id: 'wBE6f1nuKdfUncUoM1xcCul5HDm2',
        name: 'Rafael Câmara',
      },
    }
    saveData(comment)
  }

  return (
    <Container>
      <Flex sx={{ maxWidth: 830, mx: 'auto' }}>
        <Input value={comment} onChange={handleChange} />
        <IconButton
          color='primary'
          sx={{ p: 2 }}
          aria-label='directions'
          onClick={handleSubmit}
        >
          <Send />
        </IconButton>
      </Flex>
    </Container>
  )
}

function Container(props: BoxProps) {
  return (
    <Box
      component='footer'
      bgcolor='grey.300'
      sx={{ width: '100%', position: 'sticky', bottom: 0 }}
      {...props}
    />
  )
}

function Input(props: InputBaseProps) {
  return (
    <InputBase
      sx={{
        py: 1,
        pl: 3,
        ml: 2,
        borderRadius: 1,
        flex: 1,
        bgcolor: 'grey.100',
      }}
      placeholder='Comentário'
      multiline
      maxRows={3}
      {...props}
    />
  )
}
