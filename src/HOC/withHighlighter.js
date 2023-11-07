import React,{ useRef } from "react";
const suggestions = [
  "abcde",
  "test",
  "test2"
]



function withHighlighter(WrappedComponent){
  return (props)=>{
    const {value, color} = props;
    const ref = useRef();
    const REGEX = /({{.*?}})/g;
    console.log("split val:: ",value.split(REGEX));
    return(
      <>
      <WrappedComponent {...props} highlighterRef = {ref}/>
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
    
}

export default withHighlighter;