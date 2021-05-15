import { useState } from 'react';
const something = 5

export function thing(arg: number) {
  const [data, setData] = useState(0)
  console.log(arg)
  return data
}

// thing('test')
// console.log(`something`, something);