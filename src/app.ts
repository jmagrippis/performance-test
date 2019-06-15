import * as express from 'express'

import { getCompaniesWithUsers } from './getCompaniesWithUsers'

export const app = express()

app.get('/', getCompaniesWithUsers)
