import { EventEmitter, on } from 'events'
import { promisify } from 'util'

const foo = new EventEmitter()
const sleep = promisify(setTimeout)

async function run () {
  let i = 0
  for await (const event of on(foo, 'something')) {
    await sleep(100)
    if (++i == 2) {
      functionThatDoesNotExist()
    }
  }
}

run().catch(console.log)

foo.emit('something')
foo.emit('something')
