import * as actionTypes from './constants'

const initialState = {
  counter: 0,
  results: []
};

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INC_COUNTER:
      console.log(`initialState: ${JSON.stringify(initialState)}`)
      return {
        ...state, 
        counter: state.counter + 1 
      }
    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date, value: state.counter})
      }
    case 'DELETE_RESULT':
      console.log(action.id)
      return {
        ...state,
        results: state.results.filter((result) => {
          // ฟิลเตอร์ id ของ results ใน state เทีย[กับ result.id ของตัวที่ถูกกด และส่งมาเป็น targetId และกลายเป็น action.id
          return result.id !== action.id
        })
      }
    default:
      return state
  }
}

export default reducers;