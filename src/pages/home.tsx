import { Flex } from '@/components/flex'
import { Comments } from '@/components/comments'

export function Home() {
  return (
    <Flex
      direction='column'
      sx={{ alignItems: 'start', gap: 2, py: 2, maxWidth: 800 }}
    >
      <Comments />
    </Flex>
  )
}
