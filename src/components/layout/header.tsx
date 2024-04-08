import { Comment } from '@mui/icons-material'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

import { Link } from '../link'
import { Flex } from '../flex'

export function Header() {
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

          {/* <Box>
            <Button color='inherit'>
              <Link to='/login'>Entrar</Link>
            </Button>
            <Profile />
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
