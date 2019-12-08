import React, { useState } from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarContent,
  Box
} from '@material-ui/core'
import { Error } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  error: {
    backgroundColor: theme.palette.error.dark
  }
})

const Snackbar = ({ classes, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <SnackbarContent
        className={classes.error}
        message={
          <Box component='span' className={classes.message}>
            <Error className={`${classes.icon} ${classes.iconVariant}`} />
            {children}
          </Box>
        }
      />
    </MuiSnackbar>
  )
}

export default withStyles(styles)(Snackbar)
