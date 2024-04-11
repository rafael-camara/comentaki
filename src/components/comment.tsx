import { Box, BoxProps, Typography, TypographyProps } from '@mui/material'

import { Flex } from './flex'
import { ReactNode } from 'react'

const formatTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp)
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

function CommentRoot({ children }: { children: ReactNode }) {
  return <Flex sx={{ gap: 1, alignItems: 'start' }}>{children}</Flex>
}

function Body(props: BoxProps) {
  return (
    <Box
      sx={{ py: 1, px: 2, bgcolor: 'grey.200', borderRadius: 2 }}
      {...props}
    />
  )
}

function UserName(props: TypographyProps) {
  return (
    <Typography
      component='span'
      variant='body1'
      fontSize={14}
      fontWeight='600'
      mb={0.5}
      {...props}
    />
  )
}

function TimeStamp({
  timestamp,
  ...rest
}: TypographyProps & {
  timestamp: number
}) {
  return (
    <Typography
      variant='caption'
      color='textSecondary'
      sx={{ fontSize: 10 }}
      {...rest}
    >
      {' ~ '}
      {formatTimeStamp(timestamp)}
    </Typography>
  )
}

function Content(props: TypographyProps) {
  return <Typography variant='body2' {...props} />
}

export const Comment = {
  Root: CommentRoot,
  Body,
  UserName,
  TimeStamp,
  Content,
}
