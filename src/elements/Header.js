import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  useTheme,
  Box,
  Button,
} from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { useAuth } from '../auth'

const Header = () => {
  const theme = useTheme()
  const auth = useAuth()
  return (
    <AppBar position='sticky'>
      <Toolbar style={{ padding: theme.spacing(0, 4) }}>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <Link component={RouterLink} to='/' color='inherit' underline='none'>
            <Comment /> COMENTAKI
          </Link>
        </Typography>
        <Box component='div'>
          <Typography variant='button'>
            {auth.user !== null ? (
              <Button onClick={auth.signout} style={{ color: '#fff' }}>
                Sair
              </Button>
            ) : (
              <>
                <Box component='span' p={1}>
                  <Link
                    component={RouterLink}
                    to='/criar'
                    color='inherit'
                    underline='none'
                  >
                    Criar Conta
                  </Link>
                </Box>
                <Box component='span' p={1}>
                  <Link
                    component={RouterLink}
                    to='/entrar'
                    color='inherit'
                    underline='none'
                  >
                    Entrar
                  </Link>
                </Box>
              </>
            )}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Header
