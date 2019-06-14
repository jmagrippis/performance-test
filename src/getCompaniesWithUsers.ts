import { Response, Request } from 'express'
import { performance } from 'perf_hooks'

import { getCompanies } from './do-not-modify/getCompanies'
import { getUser, User } from './do-not-modify/getUser'

type CompanyWithFullUsers = {
  id: string
  name: string
  founded: number
  users: User[]
}

export const getCompaniesWithUsers = async (_: Request, res: Response) => {
  const startTime = performance.now()

  const companies = await getCompanies()

  // TODO: Use `getUser` to put full user info for the users in each company.
  // The json response should be an array of companies with users that are not
  // strings, but User objects
  console.log(companies)
  const user = await getUser('abc')
  console.log(user)
  const response: CompanyWithFullUsers[] = []
  // You should delete the above, it is just here for you to see
  // the `getUser` method and the `CompanyWithFullUsers` type

  res.json(response)

  const endTime = performance.now()
  console.log(
    `Server response took ${Math.ceil(endTime - startTime)} milliseconds.`
  )
}
