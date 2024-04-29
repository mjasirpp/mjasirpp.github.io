import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [state,setState]=useState(false)
  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)}> Click here to Show/hide</h1>
      {/* 
       state = false;
      !state = true;
      setState(true)
      when onclick happens state become true */}
      { state && <Counter/>}    {/* show/hide is mounting and unmounting */}
    </div>
  );
}

export default App;
