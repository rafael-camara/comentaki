import { LinkOwnProps, Link as MUILink } from '@mui/material'
import { ReactNode } from 'react'
import { Link as RouterLink, To } from 'react-router-dom'

interface LinkProps extends LinkOwnProps {
  children?: ReactNode
  to: To
}

export function Link(props: LinkProps) {
  return (
    <MUILink
      {...props}
      component={RouterLink}
      color='inherit'
      underline='none'
    />
  )
}
