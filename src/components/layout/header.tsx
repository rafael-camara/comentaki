import { Comment } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'

import { Link } from '../link'
import { Flex } from '../flex'
import { useAuth } from '@/context/auth-context'
import { Profile } from '../profile'

export function Header() {
  const { user } = useAuth()

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Link to='/'>
              <Flex sx={{ gap: 1 }}>
                <Comment />
                <Typography variant='h6' noWrap>
                  COMENTAKI
                </Typography>
              </Flex>
            </Link>
          </Box>

          <Box>
            {user !== null ? (
              <Profile />
            ) : (
              <Button color='inherit'>
                <Link to='/login'>Entrar</Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
