import fetch from 'node-fetch'

import { delay } from './delay'

export type User = {
  id: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
}

export const getUser = (id: string): Promise<User> =>
  delay(2000).then(() =>
    fetch(`https://randomuser.me/api/?seed=${id}&inc=id,name,email`).then(
      (res) => res.json().then(({ results }) => results[0])
    )
  )
