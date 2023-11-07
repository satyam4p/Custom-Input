

function withHighlighter(WrappedComponent){
  let colorScheme = 'green';
  return (props)=>{
    console.log("props in with highlighter:: ",props);
    return(
      <WrappedComponent {...props}/>
    )

  }
    
}

export default withHighlighter;