export interface IComment {
  content: string
  createdAt: number
  user: IUser
}

export interface IUser {
  id: string
  name: string
}
