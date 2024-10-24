import * as vars from '../src/import-data';

test('check IMPDATA_STATUS_ENUM', () => {
  expect(vars.enums.IMPDATA_SOURCES_ENUM.dairyComp).toEqual('dairyComp');
});
