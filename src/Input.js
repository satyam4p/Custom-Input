import React, { useRef, useState, useEffect } from "react";
import withHighlighter from "./HOC/withHighlighter";

const InputField = ({ value, onChange, highlighterRef, color })=>{
  useEffect(()=>{    

  },[value])

  const handleHighlighterPos=(e)=>{
    highlighterRef.current.scrollTop = e.target.scrollTop;
    highlighterRef.current.scrollLeft = e.target.scrollLeft;
  }

  return(
      <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll = {handleHighlighterPos}
          props = {"asjhdbas"}
        />
  )
}



export default withHighlighter(InputField);


