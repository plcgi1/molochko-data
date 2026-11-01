import * as data from '../../src';
import {
  TRANSFER_REASON_CATEGORY_ENUM,
  TRANSFER_REASON_CODE_CATEGORY,
  TRANSFER_REASON_CODE_ENUM,
} from '../../src/event';

describe('transfer reason enums', () => {
  it('has 5 categories', () => {
    expect(Object.values(TRANSFER_REASON_CATEGORY_ENUM)).toEqual([
      'repro',
      'health',
      'prod',
      'young',
      'org',
    ]);
  });

  it('has 18 standard codes whose values equal their keys', () => {
    const entries = Object.entries(TRANSFER_REASON_CODE_ENUM);
    expect(entries).toHaveLength(18);
    entries.forEach(([key, value]) => expect(value).toBe(key));
  });

  it('assigns a category to every code', () => {
    expect(Object.keys(TRANSFER_REASON_CODE_CATEGORY).sort()).toEqual(
      Object.values(TRANSFER_REASON_CODE_ENUM).sort(),
    );
    expect(TRANSFER_REASON_CODE_CATEGORY[TRANSFER_REASON_CODE_ENUM.dryoff]).toBe('repro');
    expect(TRANSFER_REASON_CODE_CATEGORY[TRANSFER_REASON_CODE_ENUM.lame]).toBe('health');
    expect(TRANSFER_REASON_CODE_CATEGORY[TRANSFER_REASON_CODE_ENUM.other]).toBe('org');
  });

  it('is exported through the package barrels', () => {
    expect(data.eventEnums.TRANSFER_REASON_CODE_ENUM.other).toBe('other');
    expect(data.event.TRANSFER_REASON_CATEGORY_ENUM.health).toBe('health');
  });
});
