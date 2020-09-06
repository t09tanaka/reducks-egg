import { Command } from 'commander'

import { farm } from './commands/farm'
import { spawn } from './commands/spawn'
import { bake } from './commands/bake'

const program = new Command()
program.version('0.0.1')

program
  .command('farm')
  .description('initialize root reducer')
  .action(() => farm())

program
  .command('spawn')
  .option(
    '-n, --reducer-name <name>',
    'reducer name as camel case: e.g., accountDetail'
  )
  .option('-c, --category <category>', 'reducer`s category')
  .description('generate reducks style reducer module')
  .action((source) => {
    spawn(source.reducerName, source.category)
  })

program
  .command('bake')
  .option('-n, --reducer-name <name>', 'reducer name: e.g., accountDetail')
  .option(
    '-c, --component-name <component>',
    'component name: e.g., YourComponent'
  )
  .option('-p, --path <path>', 'component path from root')
  .description('generate component using redux')
  .action((source) => {
    bake(source.reducerName, source.componentName, source.path)
  })

program.on('--help', () => {
  console.log()
  console.log('For more information, see')
  console.log('https://github.com/t09tanaka/reducks-egg')
  console.log()
})

program.parse(process.argv)
