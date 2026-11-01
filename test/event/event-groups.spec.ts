import {
  EVENT_BY_GROUPS,
  EVENT_GROUP_BY_TYPE,
  EVENT_GROUPS,
  EVENT_TYPES_ENUM,
} from '../../src/event';

describe('event groups', () => {
  it('has the groups lifecycle, veterinary, movement and other', () => {
    expect(Object.values(EVENT_GROUPS)).toEqual(['lifecycle', 'veterinary', 'movement', 'other']);
  });

  it('gives every event type a group', () => {
    Object.values(EVENT_TYPES_ENUM).forEach((type) => {
      expect(Object.values(EVENT_GROUPS)).toContain(EVENT_GROUP_BY_TYPE[type]);
    });
  });

  it('puts every event type in exactly one group list', () => {
    const listed = Object.values(EVENT_BY_GROUPS).flat();
    expect([...listed].sort()).toEqual([...Object.values(EVENT_TYPES_ENUM)].sort());
  });

  it('keeps the lifecycle list and its order', () => {
    expect(EVENT_BY_GROUPS[EVENT_GROUPS.lifecycle]).toEqual([
      'ohota',
      'insemenation',
      'recheck',
      'suhostoi',
      'pozSuhostoi',
      'abort',
      'neosem',
      'calving',
    ]);
  });

  it('groups movements and treatment', () => {
    [EVENT_TYPES_ENUM.perevod, EVENT_TYPES_ENUM.changeGroup, EVENT_TYPES_ENUM.transferOut].forEach(
      (type) => expect(EVENT_GROUP_BY_TYPE[type]).toBe(EVENT_GROUPS.movement),
    );
    expect(EVENT_BY_GROUPS[EVENT_GROUPS.movement]).toEqual([
      'perevod',
      'changeGroup',
      'transferOut',
      'prodazha',
    ]);
    expect(EVENT_GROUP_BY_TYPE[EVENT_TYPES_ENUM.treatment]).toBe(EVENT_GROUPS.veterinary);
    expect(EVENT_BY_GROUPS[EVENT_GROUPS.other]).toEqual(['biometry', 'retagging']);
  });
});
