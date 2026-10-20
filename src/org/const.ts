export const CDefaultOrgSettings = {
  events: {
    periodInsemenationAfterLastCalving: [40, 60],
    periodForDryAfterInsemenation: [220, 250],
    periodForLateDryAfterInsemenation: [250, 275],
    periodCalvingAfterInsemenation: [275, 310],
    periodGuessCalving: [365, 410],
    minInsemenationAgeDays: 540,
    periodFirstHeatAfterBirth: [300, 450],
    periodInsemenationAfterOhota: [0, 1],
    periodForRecheckAfterInsemenation: [30, 220],
    periodInseminationAfterOpenRecheck: [18, 24],
    periodAbortAfterPregnantRecheck: [30, 60],
  },
  reports: {
    pagingPeriod: 21, // days
    vwp: {
      heifer: 360, // days
      firstHeifer: 70, // days
      mature: 60, // days
    },
  },
};
