import { ReactNode } from 'react'
import { Comment } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TypographyProps,
} from '@mui/material'

import { Flex } from '@/components/flex'

function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <Flex sx={{ placeContent: 'center', p: 3 }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Flex sx={{ gap: 1 }}>
            <Comment color='primary' fontSize='large' />
            <Typography variant='h5'>COMENTAKI</Typography>
          </Flex>

          {children}
        </CardContent>
      </Card>
    </Flex>
  )
}

function Title(props: TypographyProps) {
  return (
    <Box sx={{ my: 3, textAlign: 'center' }}>
      <Typography variant='h6' fontWeight='600' {...props} />
    </Box>
  )
}

export const Layout = {
  Root: LayoutRoot,
  Title,
}
