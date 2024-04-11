import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from '@mui/icons-material'
import {
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  InputBase,
  InputBaseProps,
} from '@mui/material'
import { forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useAuth } from '@/context/auth-context'
import { useDatabase } from '@/hooks/useDatabase'
import { IComment } from '@/types/comment'
import { Form } from 'react-router-dom'
import { Flex } from '../flex'

const commentSchema = z.object({
  comment: z.string().min(1),
})

type CommentForm = z.infer<typeof commentSchema>

export function Footer() {
  const { register, handleSubmit, reset } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
  })

  const { user } = useAuth()
  const { saveData, TIMESTAMP } = useDatabase<IComment>('comments')

  function handleSendComment({ comment }: CommentForm) {
    if (user && user.email) {
      const name = user.displayName || user.email.split('@')[0]

      const newComment: IComment = {
        content: comment,
        createdAt: TIMESTAMP,
        user: {
          id: user.uid,
          name,
        },
      }
      saveData(newComment)
    }

    reset()
  }

  if (!user) return null

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSendComment)}>
        <Flex sx={{ maxWidth: 830, mx: 'auto' }}>
          <Input {...register('comment')} autoFocus />
          <SendButton type='submit'>
            <Send />
          </SendButton>
        </Flex>
      </Form>
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

const Input = forwardRef((props: InputBaseProps, ref) => (
  <InputBase
    ref={ref}
    sx={{
      py: 1,
      pl: 3,
      ml: 2,
      borderRadius: 1,
      flex: 1,
      bgcolor: 'grey.100',
    }}
    placeholder='Comentar...'
    multiline
    maxRows={3}
    {...props}
  />
))

function SendButton(props: IconButtonProps) {
  return (
    <IconButton color='primary' sx={{ p: 2 }} aria-label='send' {...props} />
  )
}
