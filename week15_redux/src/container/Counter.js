import React from 'react'
import CounterPanel from '../components/CounterPanel';
import './Counter.css';
import { connect } from 'react-redux';

import {increaseCounter, decreaseCounter, addCounter, subtractCounter} from '../store/actions'

function Counter(props) {
  return (
    <div className='counter'>
      <div className='counter__display'>Counter: {props.ctr}</div>
      <div className='counter__button'>
        <CounterPanel value='Increase' changeCounter={props.IncrementCtr} />
        <CounterPanel value='Decrease' changeCounter={props.DecrementCtr} />
        <CounterPanel value='Add 5' changeCounter={() => props.AddCtr(5)} />
        <CounterPanel value='Subtract 5' changeCounter={() => props.SubtractCtr(5)} />
        
      </div>
    </div>
  );
}

// pass state มาจาก store ซึ่งมาจาก reducers
// state ตรงนี้คือ store.getState()
const mapStateToProps = state => {
  console.log(state);
  return {
    ctr: state.counter
  }
}


// ย้ายไปไฟล์ actions
// // ส่งไปให้ reducers แล้วเอากลับมาเป็น props
// const mapDispatchToProps = dispatch => {
//   return {
//     IncrementCtr: () => dispatch({type: 'INC_COUNTER'}),
//     DecrementCtr: () => dispatch({type: 'DEC_COUNTER'}),
//     AddCtr: (number) => dispatch({type: 'ADD_COUNTER', value: number}),
//     SubtractCtr: (number) => dispatch({type: 'SUB_COUNTER', value: number})
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    IncrementCtr: (number) => dispatch(increaseCounter(number)),
    DecrementCtr: (number) => dispatch(decreaseCounter(number)),
    AddCtr: (number) => dispatch(addCounter(number)),
    SubtractCtr: (number) => dispatch(subtractCounter(number))
  }
}

// Counter คือ component ที่เราจะเชื่อม แล้ว export Counter ไปให้ App
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


// พอดึง store มาใส่ mapStateToProps ก็ connect เพื่อเอา state นั้นไปพาสเป็น props ให้ (Counter)