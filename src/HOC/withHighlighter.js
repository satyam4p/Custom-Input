import React,{ useRef } from "react";

function withHighlighter(WrappedComponent){
  return (props)=>{
    const {value, color} = props;
    const ref = useRef();
    const REGEX = /({{.*?}})/g;
    return(
      <>
      <WrappedComponent {...props} highlighterRef = {ref} REGEX = {REGEX}/>
      <div ref={ref} className="input-renderer">
          {value.split(REGEX).map((word, index)=>{
            if(word.match(REGEX) !== null){
              return(
                <span className="highlighter" key={index} style={{color:`${color}`}}>{word}</span>
              )
            }else{
              return <span key={index}>{word}</span>
            }
          })}
      </div>
      </>
    )

  }
    
}

export default withHighlighter;