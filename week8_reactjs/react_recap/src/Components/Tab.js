import React from 'react';
import './Tab.css'

class Tab extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="tab">        
        <h3> tab content </h3>
        <p>{this.props.tabContent}</p>
      </div>
    )
  }

}

export default Tab