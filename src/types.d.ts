export type Weather ='sunny'|'rainy'|'windy'|'stormy'
export type Visibility ='grat'|'good'|'ok'|'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// export type NonSensInfo=Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>
export type NonSensInfo=Omit<DiaryEntry, 'comment'>
