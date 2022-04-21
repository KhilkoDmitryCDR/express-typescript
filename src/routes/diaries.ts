import toNewDiaryEntry from '../utils'
import express from 'express'
import * as DiaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(DiaryServices.getEntriesWithoutSensInfo())
})
router.get('/:id', (req, res) => {
  const diary = DiaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})
router.post('/', (req, res) => {
  try {
    console.log('HOLA')

    const NewDiaryEntry = toNewDiaryEntry(req.body)
    console.log('HOLA')
    console.log(NewDiaryEntry)
    const addedDiaryEntry = DiaryServices.addDiary(NewDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error) {
    res.status(400)
  }
})
export default router
