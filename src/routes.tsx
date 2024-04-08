import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/app'
import { Home } from '@/pages/home'
import { Forgot } from '@/pages/user-auth/forgot'
import { SignIn } from '@/pages/user-auth/sign-in'
import { SignUp } from '@/pages/user-auth/sign-up'

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: SignIn,
      },
      {
        path: '/signup',
        Component: SignUp,
      },
      {
        path: '/forgot',
        Component: Forgot,
      },
    ],
  },
])
