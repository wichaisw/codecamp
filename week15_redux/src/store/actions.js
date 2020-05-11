

// ส่งไปให้ reducers แล้วเอากลับมาเป็น props
const increaseCounter = () => ({type: 'INC_COUNTER'})
const decreaseCounter = () => ({type: 'DEC_COUNTER'})
const addCounter = (number) => ({type: 'ADD_COUNTER', value: number})
const subtractCounter = (number) => ({type: 'SUB_COUNTER', value: number})


export {
  increaseCounter,
  decreaseCounter,
  addCounter,
  subtractCounter
}
