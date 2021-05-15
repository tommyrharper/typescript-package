import { useState } from 'react';
import {atom, useAtom } from 'jotai'
const something = 5

const test = atom('test')


export function thing(arg: number) {
  const [data, setData] = useState(0)
  const [data2, setData2] = useAtom(test)

  console.log(arg)
  return data
}

// thing('test')
// console.log(`something`, something);