
import './App.css';
import Dropdown from './Dropdown';
import { useState } from 'react';
function App() {

  const [yes,setYes]=useState([]);

  

  return (
    <div className="App">
     <Dropdown/>
    </div>
  );
}


export default App;
