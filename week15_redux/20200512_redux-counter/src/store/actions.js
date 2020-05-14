import * as actionTypes from './constants'

// ส่งไปให้ reducers แล้วเอากลับมาเป็น props
const increaseCounter = () => ({type: actionTypes.INC_COUNTER});
const decreaseCounter = () => ({type: actionTypes.DEC_COUNTER});
const addCounter = (number) => ({type: actionTypes.ADD_COUNTER, value: number});
const subtractCounter = (number) => ({type: actionTypes.SUB_COUNTER, value: number});
const resetCounter = () => ({type: actionTypes.RESET_COUNTER});
const AsycnSaveResult = (ctr) => {
  return dispactch => {
    setTimeout(() => {
      dispactch(saveResult(ctr))
    }, 2000)
  }
} 

const deleteResult = (targetId) => ({type: actionTypes.DELETE_RESULT, id: targetId});

const saveResult = (ctr) => ({type: actionTypes.STORE_RESULT , counter: ctr});

// export const increaseCounter = () => {
//   return {
//     type: actionTypes.INC_COUNTER
//   }
// }

export {
  increaseCounter,
  decreaseCounter,
  addCounter,
  subtractCounter,
  resetCounter,
  AsycnSaveResult,
  deleteResult
}
