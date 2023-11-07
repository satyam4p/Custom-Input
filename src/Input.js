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

  useEffect(()=>{

  },[value])

  return(
    <>
      <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input-renderer">
          
        </div>
    </>
  )
}

export default withHighlighter(InputField);


