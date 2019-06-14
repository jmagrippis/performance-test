import fetch from 'node-fetch'

import { delay } from './delay'

export const getUser = (id: string) =>
  delay(2000).then(() =>
    fetch(
      `https://randomuser.me/api/?seed=${id}&inc=id,name,picture,email`
    ).then((res) => res.json().then(({ results }) => results[0]))
  )
