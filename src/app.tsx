import { Outlet } from 'react-router-dom'

import { Flex } from '@/components/flex'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export function App() {
  return (
    <>
      <Header />
      <Flex component='main' sx={{ flex: 1, order: 0, alignItems: 'end' }}>
        <Outlet />
      </Flex>
      <Footer />
    </>
  )
}
