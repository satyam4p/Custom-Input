  import { useEffect, useState } from 'react';
import './highlighter.css';

const hasSuggestions = (WrappedComponent)=>{
  return (props)=>{
    const { hasSuggestion, value, onChange, suggestions, REGEX, spanRef, wordRef } = props;
    const [suggest, setSuggest] = useState(suggestions);
    const [showSuggest, setShow] = useState(false);
    useEffect(()=>{
      console.log("wordRef:: ",wordRef)
    },[value])

    const setSuggestion = (event, item) =>{
      setShow(false);
      if(value.length > 0){
        let splitVal = value.split(REGEX);
        console.log(splitVal)
        let replaceVal = splitVal[splitVal.length - 2];
        var regex = /{{(.*?)}}/g;
        let ans = replaceVal ? replaceVal.replace(regex, `{{${item.name}}}`) : "";
        const finalVal = splitVal.slice(0,splitVal.length - 2).join('') + ans + splitVal.slice(splitVal.length-1, splitVal.length);
        onChange(finalVal);
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
        <WrappedComponent {...props} />
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