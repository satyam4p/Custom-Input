import { useState } from 'react';
import './App.css';
import Input from './Input';

function App() {

  const [value, setValue] = useState('');

  return (
    <div className="input-container">
      <Input onChange = {setValue} value = {value} color={"#E24337"} />
    </div>
  );
}

export default App;