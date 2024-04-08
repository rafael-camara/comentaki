import { Box, BoxProps } from '@mui/material'

type FlexProps = BoxProps & {
  direction?: 'row' | 'column'
}

export function Flex({ sx, direction = 'row', ...rest }: FlexProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...rest}
    />
  )
}
