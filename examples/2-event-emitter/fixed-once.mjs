import { EventEmitter, once } from 'events'
import { promisify } from 'util'

const foo = new EventEmitter()
const sleep = promisify(setTimeout)

async function run () {
  await once(foo, 'something')
  await sleep(100)
  functionThatDoesNotExist()
}

run().catch(console.log)

foo.emit('something')
