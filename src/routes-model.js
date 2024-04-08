import React from 'react'
import { Box, withStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import theme from './theme'
import Header from './elements/Header'

import { AuthProvider } from './auth'
import { styles } from './theme/styles'
import Content from './Content'
import CreateUser from './CreateUser'
import SignInUser from './SignInUser'

const Routes = ({ classes }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Header />
          <Box className={classes.root}>
            <Switch>
              <Route path='/' exact component={Content} />
              <Route path='/criar' component={CreateUser} />
              <Route path='/entrar' component={SignInUser} />
            </Switch>
          </Box>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  )
}
export default withStyles(styles)(Routes)
