export interface User {
  email: string
  password: string
  _id: string
}

export interface UserFromDb extends User {
  __v: number
}