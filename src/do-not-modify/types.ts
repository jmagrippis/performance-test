export type User = {
  id: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
}

export type Company = {
  id: string
  name: string
  founded: number
  users: string[]
}

export type CompanyWithFullUsers = {
  id: string
  name: string
  founded: number
  users: User[]
}
