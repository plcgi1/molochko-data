import * as vars from '../src/index';
import { EVENT_ERROR_REASON_AS_OBJECT } from '../src/enums';

console.info('EVENT_ERROR_REASON_AS_OBJECT', EVENT_ERROR_REASON_AS_OBJECT);
test('check EVENT_ERROR_REASON_ENUM', () => {
  expect(vars.enums.EVENT_ERROR_REASON_ENUM.statusNotAllowed).toEqual('animal-status-not-allowed');
});
