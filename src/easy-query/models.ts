export interface IEQField {
  field: string
  value: string
  label: string
  type: string
  visible: boolean
}

export interface IEQEventField extends IEQField{
  treatment?: IEQField
  protocol?: IEQField
  seedBank?: IEQField
  employee?: IEQField
}

export interface IEQItem {
  animal: Record<string, IEQField>
  metrics: Record<string, IEQField>
  events: Record<string, IEQEventField>[]
}

export interface IEQResponse {
  count: number
  data: IEQItem[]
}