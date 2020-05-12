const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'STORE_RESULT':
    return {
      ...state,
      results: state.results.concat({id: new Date(), counter: action.counter})
    };
  case 'DELETE_RESULT':
    return {
      ...state,
      results: state.results.filter((result) => {
        // ฟิลเตอร์ id ของ results ใน state เทีย[กับ result.id ของตัวที่ถูกกด และส่งมาเป็น targetId และกลายเป็น action.id
        return result.id !== action.id
      })
    };
  default:
    return state
  }
}

export default reducer;