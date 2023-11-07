import React, { useRef, useState, useEffect } from "react";
import withHighlighter from "./HOC/withHighlighter";

const suggestions = [
  "abcde",
  "test",
  "test2"
]

const REGEX = /({{.*?}})/g;

const InputField = ()=>{
  const [value, setValue] = useState('');
  const ref = useRef();
  useEffect(()=>{    
    console.log("split:: ",value.split(REGEX));

  },[value])
  const color = "red";
  const syncScroll=(e)=>{
    ref.current.scrollTop = e.target.scrollTop;
    ref.current.scrollLeft = e.target.scrollLeft;
  }

  return(
    <>
      <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onScroll = {syncScroll}
        />
        <div ref={ref} className="input-renderer">
          {value.split(REGEX).map((word, index)=>{
            if(word.match(REGEX) !== null){
              return(
                <span key={index} style={{color:`${color}`}}>{word}</span>
              )
            }else{
              return <span key={index}>{word}</span>
            }
          })}
        </div>
    </>
  )
}

export default withHighlighter(InputField);


