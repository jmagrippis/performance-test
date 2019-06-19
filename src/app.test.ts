import * as request from 'supertest'

import { app } from './app'
import { CompanyWithFullUsers } from './do-not-modify/types'

describe('root', () => {
  jest.setTimeout(30000)

  it('should return a list of all Companies', async () => {
    const companies: CompanyWithFullUsers[] = (await request(app).get('/')).body

    expect(companies.length).toBe(3)
  })

  it('returns full user info for each Company', async () => {
    const companies: CompanyWithFullUsers[] = (await request(app).get('/')).body

    for (const company of companies) {
      for (const user of company.users) {
        expect(user).toHaveProperty('name')
      }
    }
  })
})
