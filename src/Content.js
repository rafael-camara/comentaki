import React from 'react'
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  Divider,
  CardContent,
  Grid,
} from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { useAuth } from './auth'

import NewComment from './NewComment'
import Comments from './Comments'
import UserInfo from './UserInfo'

export default function Content() {
  const auth = useAuth()
  return (
    <Grid container spacing={2} direction='row' justifyContent='center'>
      <Grid item md={auth.user !== null ? 7 : 6}>
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
        <Grid item md={5}>
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
