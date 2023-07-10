import * as vars from '../src/index';

test('check SYSTEM_USER_ROLES_AS_OBJECT', () => {
  expect(vars.enums.SYSTEM_USER_ROLES_AS_OBJECT.root).toEqual('root');
});

