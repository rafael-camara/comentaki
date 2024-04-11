import { MouseEvent, useState } from 'react'
import { Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'

import { Avatar } from '../avatar'
import { DialogConfigUser } from './dialog-config-user'
import { useAuth } from '@/context/auth-context'

export function Profile() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [openConfigUser, setOpenConfigUser] = useState(false)
  const { user, signOut } = useAuth()

  const displayName =
    user?.displayName || user?.email?.split('@')[0] || 'Anônimo'

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignOut = async () => {
    handleCloseUserMenu()

    signOut()
  }

  return (
    <>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar displayName={displayName} />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={() => setOpenConfigUser(true)}>
          <Typography textAlign='center'>Configurações</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut}>
          <Typography textAlign='center'>Sair</Typography>
        </MenuItem>
      </Menu>

      <DialogConfigUser
        isOpen={openConfigUser}
        onClose={() => setOpenConfigUser(false)}
      />
    </>
  )
}
