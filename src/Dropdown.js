import React, { useState } from 'react'
import './Dropdown.css'
const Dropdown = () => {
 
    const [isActive,setActive]=useState(false);
    const[list]=useState(["yes","Probablynot"]);
    const[value,setValue]=useState([]);

    const onClickHandler=(e)=>{
        setValue(e.target.textContent);
        setActive(false);
    }
    const onMouseOver=()=>{
        setActive(true);
    }
    const results=list.map((result,index)=>{
           return <a href='#' onClick={onClickHandler} key={index}>{result}</a>;
    })

  return (
    <div className='dropdown'>
    <h1>should we use dropdown</h1>
    <h3>{value}</h3>
    <button className='dropbtn' onMouseEnter={onMouseOver}>select</button>
    <div className='dropdown-content' style={{display:`${isActive? 'block':'none'}`}}>{results}</div>
  
    </div>
  )
}

export default Dropdown