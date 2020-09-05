import { farm } from './commands/farm'
import { Command } from 'commander'
import { spawn } from './commands/spawn'

const program = new Command()
program.version('0.0.1')

program
  .command('farm')
  .description('initialize root reducer')
  .action(() => farm())

program
  .command('spawn')
  .option('-n, --reducer-name', 'reducer name as camel case')
  .option('-d, --directory', 'output directory')
  .description('generate reducks style reducer module')
  .action((source, destination) => {
    console.log('command called')
  })

program
  .command('bake')
  .option('-d, --directory', 'reducer directory')
  .description('generate reducers by state user made')
  .action((source, destination) => {
    console.log('command called')
  })

program
  .command('toast')
  .option('-c, --component-name', 'component name')
  .option('-c, --component-name', 'component name')
  .option('-d, --directory', 'output directory')
  .description('generate component scaffold using redux')
  .action((source, destination) => {
    console.log('command called')
  })

program.on('--help', () => {
  console.log()
  console.log('For more information, see')
  console.log('https://github.com/t09tanaka/reducks-egg')
  console.log()
})

program.parse(process.argv)
