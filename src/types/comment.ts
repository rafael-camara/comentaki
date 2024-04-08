export interface IComment {
  content: string
  createdAt: Date
  user: IUser
}

export interface IUser {
  id: string
  name: string
}
