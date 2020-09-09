import AccountDetail from '~/src/reducers/account/detail/models.ts';

test('trim', () => {
  expect(new AccountDetail().trim({yourValue:''})).toBe({});
});

test('validate', () => {
  expect(new AccountDetail().validate({yourValue:''}).noError).toBe(true);
});
