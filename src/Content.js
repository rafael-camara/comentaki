import React, { useContext } from 'react'
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  Divider,
  CardContent,
  Grid
} from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { AuthContext } from './auth'

import NewComment from './NewComment'
import Comments from './Comments'
import UserInfo from './UserInfo'

export default function Content() {
  const auth = useContext(AuthContext)
  return (
    <Grid container spacing={2} direction='row' justify='center'>
      <Grid item xs={auth.user !== null ? 7 : 6}>
        <Box component='div'>
          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  <Comment />
                </Avatar>
              }
              title='COMENTÁRIOS'
            />
            <Divider />
            <CardContent>
              <Comments />
              <NewComment />
            </CardContent>
          </Card>
        </Box>
      </Grid>
      {auth.user !== null && (
        <Grid item xs={5}>
          <Box component='div' position='sticky' top={0}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar>
                    <Comment />
                  </Avatar>
                }
                title='DISPLAY NAME'
              />
              <Divider />
              <CardContent>
                <UserInfo />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      )}
    </Grid>
  )
}
