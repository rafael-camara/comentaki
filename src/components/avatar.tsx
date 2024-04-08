import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material'

type AvatarProps = MuiAvatarProps & {
  displayName?: string
}

function displayNameToColor(string: string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: displayNameToColor(name),
    },
    children: `${name
      .replace(/<[^>]+>/g, '')
      .split(' ')[0][0]
      .toUpperCase()}`,
  }
}

export function Avatar({ displayName, ...rest }: AvatarProps) {
  return <MuiAvatar {...rest} {...stringAvatar(displayName || '')} />
}
