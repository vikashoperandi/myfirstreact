import React,{useState}  from 'react'
import './App.css';

function App() {
  return (
    <div className='calc'>
     <input type="text" placeholder='0' id='ans'/>
    
     <input type='button'value='AC' className='button'/>
     <input type='button'value='+/-'className='button' />
     <input type='button'value='%'className='button'/>
     <input type='button'value='/'className='button'/>
     <input type='button'value='7'className='button'/>
     <input type='button'value='8'className='button'/>
     <input type='button'value='9'className='button'/>
     <input type='button'value='x'className='button'/>
     <input type='button'value='4'className='button'/>
     <input type='button'value='5'className='button'/>
     <input type='button'value='6'className='button'/>
     <input type='button'value='-'className='button'/>
     <input type='button'value='1'className='button'/>
     <input type='button'value='2'className='button'/>
     <input type='button'value='3'className='button'/>
     <input type='button'value='+'className='button'/>
     <input id='zero' type='button'value='0'className='button'/>
     <input type='button'value='.'className='button'/>
     <input type='button'value='='className='button'/>
     
    
     
    </div>
    
  )
}

export default App;
