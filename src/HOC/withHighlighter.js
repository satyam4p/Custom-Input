import React,{ useRef } from "react";
import './highlighter.css';
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
    return(
      <>
      <WrappedComponent {...props} highlighterRef = {ref}/>
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
      <ul className="suggestions-container">
        {suggestions.map((item, index)=>{
          return(
            <li className="highlighter-suggestion">
              {item}
              <hr/>
            </li>
          )
        })}
      </ul>
      </>
    )

  }
    
}

export default withHighlighter;