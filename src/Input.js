import React, { useRef, useState, useEffect } from "react";
import withHighlighter from "./HOC/withHighlighter";
import hasSuggestions from "./HOC/hasSuggestions";
import { compose } from "redux";

const InputField = ({ value, setValue, onChange, highlighterRef, color, REGEX, wordRef, setActiveSpan})=>{
  useEffect(()=>{    

  },[value])

  const handleHighlighterPos=(e)=>{
    highlighterRef.current.scrollTop = e.target.scrollTop;
    highlighterRef.current.scrollLeft = e.target.scrollLeft;
  }
  const handleChange = (e)=>{
    console.log(e.target.value.length)
    console.log(e.target.selectionStart)
    setValue(e.target.value)
  }

  const handleClick = (e)=>{
    let selectionStart = e.target.selectionStart;
    let splitArr = value.split(REGEX);
    let spanIndexes = splitArr.map((word, index)=>{
      if(word.match(REGEX) !=null){
        return [value.indexOf(word), value.indexOf(word) + word.length-1];
      }
    })
    /**get active san index */
    let activeSpanIndex;
    for(let element in spanIndexes){
      if(spanIndexes[element] && (selectionStart >= spanIndexes[element][0] && selectionStart <= spanIndexes[element][1])){
        activeSpanIndex = element
      }
    }
    setActiveSpan(activeSpanIndex);
  }

  return(
      <input
          value={value}
          onChange={(e) => handleChange(e)}
          onScroll = {handleHighlighterPos}
          onClick = {e=>handleClick(e)}
        />
  )
}


/**TODO: Need to implement compose function */
export default compose(withHighlighter, hasSuggestions)(InputField);


