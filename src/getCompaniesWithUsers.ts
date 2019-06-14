import { Response } from 'express'
import { performance } from 'perf_hooks'

import { getCompanies } from './do-not-modify/getCompanies'
import { getUser } from './do-not-modify/getUser'

export const getCompaniesWithUsers = async (_, res: Response) => {
  const startTime = performance.now()

  const companies = await getCompanies()

  // TODO: Use `getUser` to put full user info for the users in each company
  const user = await getUser('abc')
  console.log(user)
  // You should delete the above, it is just here for you to see the `getUser` method

  res.json(companies)
  res.end()

  const endTime = performance.now()
  console.log(
    `Server response took ${Math.ceil(endTime - startTime)} milliseconds.`
  )
}
