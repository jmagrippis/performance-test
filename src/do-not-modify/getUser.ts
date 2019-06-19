import fetch from 'node-fetch'

import { delay } from './delay'
import { User } from './types'

export const getUser = (id: string): Promise<User> =>
  delay(2000).then(() =>
    fetch(`https://randomuser.me/api/?seed=${id}&inc=name,email`).then((res) =>
      res.json().then(({ results }) => ({ ...results[0], id }))
    )
  )
