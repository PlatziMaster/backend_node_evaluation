import { application } from './config'
import createApp from './app'

const app = createApp()

app.listen(application.port, (err) => {
  if (err) {
    console.error('Error: ', err)
    return
  }
})
