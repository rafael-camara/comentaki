import React from 'react'
import { Box, withStyles } from '@material-ui/core'

import { styles } from './theme/styles'
import Routes from './routes'

const App = ({ classes }) => (
  <>
    <Box component='div' className={classes.backdrop}></Box>
    <Box component='div' className={classes.content}>
      <Routes />
    </Box>
  </>
)

export default withStyles(styles)(App)
