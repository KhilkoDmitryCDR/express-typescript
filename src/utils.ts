
import { NewDiaryEntry, Weather, Visibility } from './types'
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const parseData = (dataFromRequest: any): string => {
  if (!isString(dataFromRequest) || !isData(dataFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dataFromRequest
}
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) && !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
const isData = (data: string): boolean => {
  return Boolean(Date.parse(data))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  console.log('hola')
  console.log(object)

  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseData(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  console.log('holaaaaaaaaaaaaaaaaaaa')
  console.log(newEntry)

  return newEntry
}
export default toNewDiaryEntry
