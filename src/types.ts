
// export type Weather ='sunny'|'rainy'|'windy'|'stormy'
// export type Visibility ='grat'|'good'|'ok'|'poor'
export enum Weather{
  Sunny='sunny',
  Rainy='rainy',
  Windy='windy',
  Stormy='stormy'
}
export enum Visibility{
  Grat='grat',
  Good='good',
  Ok='ok',
  Poor='poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// export type NonSensInfo=Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>
export type NonSensInfo=Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry=Omit<DiaryEntry, 'id'>
