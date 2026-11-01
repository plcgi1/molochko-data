import * as data from '../../src';
import {
  DISPOSAL_REASON_CATEGORY_ENUM,
  DISPOSAL_REASON_CODE_CATEGORY,
  DISPOSAL_REASON_CODE_ENUM,
  DISPOSAL_REASON_CODE_OUTCOME,
  TRANSFEROUT_REASON_ENUM,
} from '../../src/event';

describe('disposal reason enums', () => {
  it('has 5 categories', () => {
    expect(Object.values(DISPOSAL_REASON_CATEGORY_ENUM)).toEqual([
      'health',
      'infect',
      'zoo',
      'sale',
      'other',
    ]);
  });

  it('has 24 standard codes whose values equal their keys', () => {
    const entries = Object.entries(DISPOSAL_REASON_CODE_ENUM);
    expect(entries).toHaveLength(24);
    entries.forEach(([key, value]) => expect(value).toBe(key));
  });

  it('assigns a category to every code', () => {
    expect(Object.keys(DISPOSAL_REASON_CODE_CATEGORY).sort()).toEqual(
      Object.values(DISPOSAL_REASON_CODE_ENUM).sort(),
    );
    const count = (category: string) =>
      Object.values(DISPOSAL_REASON_CODE_CATEGORY).filter((value) => value === category).length;
    expect([count('health'), count('infect'), count('zoo'), count('sale'), count('other')]).toEqual(
      [11, 5, 3, 2, 3],
    );
    expect(DISPOSAL_REASON_CODE_CATEGORY[DISPOSAL_REASON_CODE_ENUM.leikoz]).toBe('infect');
  });

  it('gives an outcome only to the sale reasons and theft', () => {
    expect(DISPOSAL_REASON_CODE_OUTCOME).toEqual({
      salesToThePublic: 'sold',
      breedingSales: 'sold',
      theft: 'theft',
    });
  });

  it('keeps every code of the deprecated transferOut reason enum', () => {
    const codes = Object.values(DISPOSAL_REASON_CODE_ENUM) as string[];
    Object.values(TRANSFEROUT_REASON_ENUM).forEach((code) => expect(codes).toContain(code));
  });

  it('is exported through the package barrels', () => {
    expect(data.eventEnums.DISPOSAL_REASON_CODE_ENUM.other).toBe('other');
    expect(data.event.DISPOSAL_REASON_CATEGORY_ENUM.infect).toBe('infect');
  });
});
