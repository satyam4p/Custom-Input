import React,{ useRef } from "react";

const SpanElem = (props)=>{
  console.log(props)
  return(
    <span className="highlighter" style={{color:`${props.color}`}}>{props.value}</span>
  )

}

function withHighlighter(WrappedComponent){
  return (props)=>{
    const {value, color} = props;
    const ref = useRef();
    const spanref = useRef();
    const wordRefs = useRef([]);
    const REGEX = /({{.*?}})/g;
    return(
      <>
      <WrappedComponent {...props} highlighterRef = {ref} REGEX = {REGEX} wordRef = {wordRefs.current}/>
      <div ref={ref} className="input-renderer">
          {value.split(REGEX).map((word, index)=>{
            if(word.match(REGEX) !== null){
              return(
                <div  key={index}>
                <span className="highlighter" ref={elem =>wordRefs.current[index] = elem} key={index} style={{color:`${color}`}}>{word}</span>
                </div>
              )
            }else{
              return <span  ref={spanref} key={index}>{word}</span>
            }
          })}
      </div>
      </>
    )

  }
    
}

export default withHighlighter;