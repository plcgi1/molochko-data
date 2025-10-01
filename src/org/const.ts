export const CDefaultOrgSettings = {
    events: {
        minInsemenationAgeDays: 540,
        periodForRecheckAfterInsemenation: [30, 220],
        periodInsemenationAfterLastCalving: [40, 60],
        periodForDryAfterInsemenation: [220, 250],
        periodForLateDryAfterInsemenation: [250, 275],
        periodCalvingAfterInsemenation: [275, 310],
        periodGuessCalving: [365, 410],
    },
    reports: {
        pagingPeriod: 21, // days
        vwp: {
            heifer: 360, // days
            firstHeifer: 70, // days
            mature: 60, // days
        },
    },
}

