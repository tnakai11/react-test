import React, { useEffect, useRef, useState } from 'react';
import { Button,ButtonGroup } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './App.css';

function Timer(props) {
  const [second,setSecond] = useState(0);
  const [runningFlag,setRunningFlag] = useState(false);
  const [stopFlag,setStopFlag] = useState(true);
  const refSecond = useRef(second);
  const refRunningFlag = useRef(runningFlag)
  const refStopFlag = useRef(stopFlag);
  useEffect( ()=>{
    refSecond.current = second;
    refRunningFlag.current = runningFlag;
    refStopFlag.current = stopFlag;
  },[second,runningFlag,stopFlag]);

  var id,demon;
  useEffect( ()=>{
    console.log("called")
    demon = setInterval( ()=>{
      if(!refStopFlag.current && !refRunningFlag.current){
        id = setInterval( ()=>{
          if(refStopFlag.current===true){
            clearInterval(id);
          }else{
            setSecond(refSecond.current+1)
          }
        } ,1000);
        setRunningFlag(true)
      }
    },1000)
  },[])

  let startTimer = ()=>{
    setStopFlag(false)
  }
  const stopTimer = () =>{
    setRunningFlag(false)
    setStopFlag(true)
  }
  const resetTimer = () =>{
    setSecond(0);
  }

  return (
    <Box className="Timer">
      <body>
        <p>{second} seconds have passed.</p>
        <Box className="Buttons">
          <ButtonGroup color="primary">
            {stopFlag?
              (<Button onClick={()=>{startTimer()}}>Start</Button>) :
              (<Button onClick={()=>{stopTimer()}}>Stop</Button>)
            }
            
            <Button onClick={()=>{resetTimer()}}>Reset</Button>
            
          </ButtonGroup>
        </Box>
      </body>
    </Box>
  );
}

export default Timer;