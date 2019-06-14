import * as express from 'express'

import { getCompaniesWithUsers } from './getCompaniesWithUsers'

const app = express()
const port = process.env.PORT || 8080

app.get('/', getCompaniesWithUsers)

app.listen(port, () => console.log(`Typescript app listening on port ${port}!`))
