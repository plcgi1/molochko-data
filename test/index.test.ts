import * as vars from '../src/index';

test('check EVENT_ERROR_REASON_ENUM', () => {
  expect(vars.event.EVENT_ERROR_REASON_ENUM.statusNotAllowed).toEqual('animal-status-not-allowed');
});
