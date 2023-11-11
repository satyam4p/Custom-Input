import './highlighter.css';

const hasSuggestions = (WrappedComponent)=>{
  return (props)=>{
    const { hasSuggestion, value, onChange, suggestions, REGEX } = props;
    const setSuggestion = (event, item) =>{
      if(value.length > 0){
        let splitVal = value.split(REGEX);
        let replaceVal = splitVal[splitVal.length - 2];
        var regex = /{{(.*?)}}/g;
        let ans = replaceVal ? replaceVal.replace(regex, `{{${item.name}}}`) : value;
        const finalVal = splitVal.slice(0,splitVal.length - 2).join('') + ans;
        onChange(finalVal);
      } 
    }

    if(hasSuggestion){
      return(
        <>
        <WrappedComponent {...props} />
        <ul className="suggestions-container">
          {suggestions.map((item, index)=>{
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