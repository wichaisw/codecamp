import * as actionTypes from './constants'

// ส่งไปให้ reducers แล้วเอากลับมาเป็น props
const increaseCounter = () => ({type: actionTypes.INC_COUNTER});
const decreaseCounter = () => ({type: actionTypes.DEC_COUNTER});
const addCounter = (number) => ({type: actionTypes.ADD_COUNTER, value: number});
const subtractCounter = (number) => ({type: actionTypes.SUB_COUNTER, value: number});


export {
  increaseCounter,
  decreaseCounter,
  addCounter,
  subtractCounter
}
