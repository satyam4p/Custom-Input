import './highlighter.css';

const suggestions = [
  "abcde",
  "test",
  "test2"
]
const hasSuggestions = (WrappedComponent)=>{

  return (props)=>{
    return(
      <>
      <WrappedComponent {...props} />
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



export default hasSuggestions;