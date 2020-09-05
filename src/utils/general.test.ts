import { injectionToTemplate } from './general'

test('types', () => {
  expect(
    injectionToTemplate('{{value}} {{value}}', [
      { key: 'value', value: 'beans' },
    ])
  ).toEqual('beans beans')
  expect(
    injectionToTemplate('{{weapon}} {{weapon}}', [
      {
        key: 'weapon',
        value: 'axe',
      },
    ])
  ).toEqual('axe axe')
  expect(
    injectionToTemplate('{{weapon}} {{enemy}}', [
      {
        key: 'weapon',
        value: 'axe',
      },
      {
        key: 'enemy',
        value: 'kuma',
      },
    ])
  ).toEqual('axe kuma')
  expect(
    injectionToTemplate('{{weapon}} {{enemy}}', [
      {
        key: 'weapon',
        value: 'axe',
      },
      {
        key: 'enemy',
        value: 'wolf',
      },
    ])
  ).toEqual('axe wolf')
})
