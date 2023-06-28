import * as vars from '../src/index';

test('check first object', () => {
  expect(vars.enums.USER_STATUSES_AS_OBJECT.ready).toEqual('ready');
});

