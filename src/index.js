import'@babel/polyfill'

import { config } from './config'
import createApp from'./app'

const app = createApp()

async function main() {
  try{
    (await app).listen(config.port);
    console.log(`Is connected in port ${config.port}`)
  } catch(e){
    console.error("Error es: ", e);
  }
}

main();