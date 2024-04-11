import { useEffect } from 'react'
import { CircularProgress, Typography } from '@mui/material'

import { useDatabase } from '@/hooks/useDatabase'
import { IComment } from '@/types/comment'
import { Avatar } from './avatar'
import { Flex } from './flex'
import { Comment } from './comment'

export function Comments() {
  const { data: comments } = useDatabase<IComment[]>('comments')

  const values = Object.values(comments)

  useEffect(() => {
    if (values.length > 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, [values.length])

  if (values.length === 0) {
    return (
      <Flex direction='column' sx={{ gap: 3, p: 3 }}>
        <CircularProgress />
        <Typography variant='body1'>Carregando..</Typography>
      </Flex>
    )
  }

  return (
    <>
      {values.map((comment, index) => (
        <Flex key={comment.user.id + index} sx={{ px: 3 }}>
          <Comment.Root>
            <Avatar displayName={comment.user.name} />
            <Comment.Body>
              <Comment.UserName>{comment.user.name}</Comment.UserName>
              <Comment.TimeStamp timestamp={comment.createdAt} />
              <Comment.Content>{comment.content}</Comment.Content>
            </Comment.Body>
          </Comment.Root>
        </Flex>
      ))}
    </>
  )
}
