import React, { useState } from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarContent,
  Box,
} from '@material-ui/core'
import { Done, Error } from '@material-ui/icons'
import { withStyles } from '@material-ui/styles'

const styles = (theme) => ({
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  success: {
    backgroundColor: theme.palette.success.dark,
  },
})

const Snackbar = ({ classes, type, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
    >
      {type === 'success' ? (
        <SnackbarContent
          className={classes.success}
          message={
            <Box component='span' className={classes.message}>
              <Done className={`${classes.icon} ${classes.iconVariant}`} />
              {children}
            </Box>
          }
        />
      ) : (
        <SnackbarContent
          className={classes.error}
          message={
            <Box component='span' className={classes.message}>
              <Error className={`${classes.icon} ${classes.iconVariant}`} />
              {children}
            </Box>
          }
        />
      )}
    </MuiSnackbar>
  )
}

export default withStyles(styles)(Snackbar)
