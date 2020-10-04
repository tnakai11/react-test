import React, { useState } from 'react';
import { Button,ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './App.css';

function Counter(props) {
  const [count,setCount] = useState(0);
  const plusCount = () =>{
    setCount(count+1)
  }
  const minusCount = () =>{
    setCount(count-1)
  }
  const resetCount = () =>{
    setCount(0)
  }
  return (
    <Box className="Counter">
      <body>
        <p>The count is {count}.</p>
        <Box className="Buttons">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={()=>{ minusCount()} }>-</Button>
            <Button onClick={()=>{ resetCount()} }>RESET</Button>
            <Button onClick={()=>{ plusCount()} }>+</Button>
          </ButtonGroup>
        </Box>
      </body>
    </Box>
  );
}

export default Counter;