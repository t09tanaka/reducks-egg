export const TEST_REDUCER_MODEL_TEMPLATE = `import {{reducerName}} from '~{{reducersDirectory}}/models.ts';

test('trim', () => {
  expect(new {{reducerName}}().trim({yourValue:''})).toBe({});
});

test('validate', () => {
  expect(new {{reducerName}}().validate({yourValue:''}).noError).toBe(true);
});
`
