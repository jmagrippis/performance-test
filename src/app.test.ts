import * as request from 'supertest'

import { app } from './app'
import { CompanyWithFullUsers } from './getCompaniesWithUsers'

describe('root', () => {
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
