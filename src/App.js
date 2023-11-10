import { useState } from 'react';
import './App.css';
import Input from './Input';
import envJSON from './mock/env.json';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="input-container">
      <Input onChange = {setValue} value = {value} color={"#E24337"}  suggestions={envJSON} hasSuggestion={true}/>
    </div>
  );
}

export default App;