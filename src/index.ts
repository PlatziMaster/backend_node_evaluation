import { application } from './config'
import createApp from './app'

const app = createApp()

app.listen(application.port, () => {
  console.log(
    `server started at http://${application.host}:${application.port}`
  )
})
