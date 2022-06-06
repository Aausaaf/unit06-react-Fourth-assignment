import React, { useEffect, useState } from 'react';
import "./timer.css"
const Timer = () => {
    const [min, setmin] = useState(0)
    const [sec, setsec] = useState(0)
    const tick = () => {
        setsec(sec + 1)
        if (sec >= 59)
        {
            setsec(0)
            setmin(min+1)
            }
    }
    let interval;
    useEffect(() => {
    interval = setInterval(tick,1000)
        return () => {
          clearInterval(interval)
      }

    }, [sec])
    const stop = () => {
        clearInterval(interval)
    }
     const restart = () => {
         setsec(0)
         setmin(0)
    }
     
    

    return (
        <>
            <div className="timer_box">
                
                <p className='p'>Timer</p>
                <div style={{ display: "flex" }} className="flex">
                        {
                    (min > 9) ? <p>{min}</p> : <p>0{min}</p> 
                }:
                 {
                    (sec > 9) ? <p>{sec}</p> : <p>0{sec}</p> 
                }
                </div>
                {/* <button className='start' onClick={start}>start</button> */}
                {/* <button className='restart' onClick={reset}>Restart</button> */}
                <button onClick={stop} className='stop'>Stop</button>
                <button style={{marginLeft:"1.2vw"}} onClick={restart}>Restart</button>
            </div>
            
        </>
     );
}
 
export default Timer;
