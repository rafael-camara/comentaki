import {
  DatabaseReference,
  off,
  onValue,
  push,
  ref,
  set,
} from 'firebase/database'
import { Timestamp } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { database } from '@/firebaseConfig'

interface DatabaseType<T> {
  data: T
  saveData: (data: T) => void
  TIMESTAMP: number
}

export function useDatabase<T>(endpoint: string): DatabaseType<T> {
  const [data, setData] = useState<T>({} as T)

  const TIMESTAMP = Timestamp.now().toMillis()

  function readData(databaseRef: DatabaseReference) {
    onValue(databaseRef, (snapshot) => {
      setData(snapshot.val() as T)
    })
  }

  function writeData(data: T) {
    const databaseRef = ref(database, endpoint)
    const newDataRef = push(databaseRef)

    set(newDataRef, data)
  }

  useEffect(() => {
    const databaseRef = ref(database, endpoint)

    readData(databaseRef)

    return () => off(databaseRef, 'value')
  }, [endpoint])

  return { data, saveData: writeData, TIMESTAMP }
}
