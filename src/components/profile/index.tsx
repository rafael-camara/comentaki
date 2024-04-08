import { MouseEvent, useState } from 'react'
import { Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'

import { Avatar } from '../avatar'
import { DialogConfigUser } from './dialog-config-user'

export function Profile() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [openConfigUser, setOpenConfigUser] = useState(false)

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar
          src='https://github.com/rafael-camara.png'
          displayName='Rafael Câmara'
        />
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
        <MenuItem onClick={handleCloseUserMenu}>
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
