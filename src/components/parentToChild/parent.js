import React from 'react';
import Child from './child';

const parent = (props) => {
  return(
    <div>
     
      <Child doWhatever={props.changeTheWorld} childtitle={props.childtitle} />
      <Child doWhatever={props.keepTheWorldSame} childtitle={props.childtitle} />

    </div>
  )

}

export default parent;