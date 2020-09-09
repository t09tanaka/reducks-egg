export const TEST_REDUCER_MODEL_TEMPLATE = `test('trim', () => {
  expect(new {{reducerName}}().trim({yourValue:''})).toBe({});
});

test('validate', () => {
  expect(new {{reducerName}}().validate({yourValue:''}).noError).toBe(true);
});
`
