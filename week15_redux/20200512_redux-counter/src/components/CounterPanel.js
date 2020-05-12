import React from 'react'
import './CounterPanel.css'

export default function Counter(props) {
  return (
    <div className='counter-panel' onClick={props.changeCounter}>
      {props.value}
    </div>
  )
}
