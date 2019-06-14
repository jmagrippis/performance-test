export type Company = {
  id: string
  name: string
  founded: number
  users: string[]
}

export const getCompanies = async (): Promise<Company[]> => [
  {
    id: 'company-a',
    name: 'The Best Company',
    founded: 1985,
    users: ['user-a', 'user-b', 'user-c', 'user-x', 'user-y']
  },
  {
    id: 'company-b',
    name: 'Misery Loves Company',
    founded: 1988,
    users: ['user-f', 'user-z']
  },
  {
    id: 'company-c',
    name: 'The Newest Company',
    founded: 1999,
    users: ['user-d', 'user-e', 'user-c']
  }
]
