import React, { useRef, useState, useEffect } from "react";
import withHighlighter from "./HOC/withHighlighter";
import hasSuggestions from "./HOC/hasSuggestions";
import { compose } from "redux";

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
        />
  )
}


/**TODO: Need to implement compose function */
export default compose(withHighlighter, hasSuggestions)(InputField);


