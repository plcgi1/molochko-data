export interface EnumItem {
  readonly id: string
  readonly label: string
  readonly color?: string
}

export type EnumArrayAsObject  = Record<string, string>