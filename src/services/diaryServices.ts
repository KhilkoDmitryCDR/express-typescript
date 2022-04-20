import { DiaryEntry, NonSensInfo } from '../types'
import diaryData from './diaries.json'
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries
export const getEntriesWithoutSensInfo = (): NonSensInfo[] => diaries

export const addEntry = (): undefined => undefined
