  import { useEffect, useState } from 'react';
import './highlighter.css';

const hasSuggestions = (WrappedComponent)=>{
  return (props)=>{
    const { hasSuggestion, value, setValue, suggestions, REGEX, spanRef, wordRef } = props;
    const [suggest, setSuggest] = useState(suggestions);
    const [showSuggest, setShow] = useState(false);
    const [activeSpanIndex, setActiveSpan] = useState(null);
    useEffect(()=>{
      
    },[value])

    /** TODO find the active span index and change the values appropirately */
    const setSuggestion = (event, item) =>{
      setShow(false);
      if(value.length > 0){
        if(wordRef && wordRef[activeSpanIndex]){
          wordRef[activeSpanIndex].innerText = `{{${item.name}}}`;
        }
        let splitVal = value.split(REGEX);
        console.log("splitVal:: ",splitVal);
        splitVal[activeSpanIndex] = `{{${item.name}}}`;
        console.log("splitVal after:: ",splitVal);
        const finalVal = splitVal.join('');
        console.log("final value:: ",finalVal);
        setValue(finalVal);
      }
    }

    useEffect(()=>{

      if(value){
        value.split(REGEX).map((word, index)=>{
          if(word.match(REGEX) != null){
            let split1 = word.split("{{")[1]
            let searchVal = split1.split("}}")[0];
            let suggest = suggestions.filter((w,index)=>{
              return w.name.includes(searchVal);
            });
            setSuggest(suggest);
          }
        })
      }
      if(value.match(/({{)/g)){
        setShow(true);
      }
    },[value])
    useEffect(()=>{

      // if(value.match(/({{.*?)/g)){
      //   if(value.split(/({{.*?)/g)[value.split(/({{.*?)/g).length-2] == '{{'){
      //     setShow(true)
      //   }else{
      //     setShow(false);
      //   }
      // }

    },[value])
    if(hasSuggestion){
      return(
        <>
        <WrappedComponent {...props} setActiveSpan = {setActiveSpan} />
        <ul className="suggestions-container">
          { showSuggest && suggest.map((item, index)=>{
            return(
              <li onClick={e=>setSuggestion(e, item)} key={index} className="highlighter-suggestion">
                {item.name}
                <hr/>
              </li>
            )
          })}
        </ul>
        </>
      )
    }
  }
}



export default hasSuggestions;