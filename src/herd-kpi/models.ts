export interface IHerdKpiSnapshot {
  id: number;
  orgId: string;
  date: string;
  pregnancyRate: number | null;
  conceptionRate: number | null;
  heatDetectionRate: number | null;
  pregnancyRate21d: number | null;
  avgDaysOpen: number | null;
  avgDIM: number | null;
  vwpCompliance: number | null;
  cullingRate: number | null;
  cullingCount: number;
  totalAnimals: number;
  avgMilkYield: number | null;
  totalMilkYield: number | null;
  milkingAnimalCount: number;
  cullingByReason: Record<string, number>;
  cullingByType: Record<string, number>;
  dimDistribution: IDIMBucket[];
  hdrPeriods: IHDRPeriod[];
}

export interface IDIMBucket {
  bucket: string;
  count: number;
}

export interface IHDRPeriod {
  periodNumber: number;
  periodStart: string;
  periodEnd: string;
  readinessCount: number;
  bredCount: number;
  pregnancyCount: number;
  abortCount: number;
  HDR: number;
  CR: number;
  PR: number;
}

export interface IMilkYieldPoint {
  date: string;
  totalYield: number;
  animalCount: number;
  avgYieldPerHead: number;
}

export interface IHerdKpiResponse {
  data: IHerdKpiSnapshot[];
  count: number;
}

export interface IMilkTrendResponse {
  data: IMilkYieldPoint[];
  count: number;
}
