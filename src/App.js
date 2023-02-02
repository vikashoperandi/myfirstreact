import React,{useState}  from 'react'
import './App.css';

const App=()=> {

const [result,setresult]=useState("");
const clickhandler=(event)=>{
   setresult(result.concat(event.target.value))

}
const clear=()=>{
  setresult("");
}
const total=()=>{
   let res = Function("return "+result)();
  setresult(res.toString());

}
 const plusmines=()=>{
  if(result.charAt(0)==="-"){
  setresult(result.substring(1));
  }else{
    setresult("-"+result);
  }
   
 }

  return (
    <div className='calc'>
     <input type="text" placeholder='0' id='ans' value={result}/>
    
     <input type='button'value='AC' id='d2' className='button'onClick={clear}/>
     <input type='button'value='+/-'id='d2'className='button' onClick={plusmines}/>
     <input type='button'value='%'id='d2'className='button'onClick={clickhandler}/>
     <input type='button'value='/' id='d1'className='button'onClick={clickhandler}/>
     <input type='button'value='7'className='button' onClick={clickhandler}/>
     <input type='button'value='8'className='button'onClick={clickhandler}/>
     <input type='button'value='9'className='button'onClick={clickhandler}/>
     <input type='button'value='*'id='d1'className='button'onClick={clickhandler}/>
     <input type='button'value='4'className='button'onClick={clickhandler}/>
     <input type='button'value='5'className='button'onClick={clickhandler}/>
     <input type='button'value='6'className='button'onClick={clickhandler}/>
     <input type='button'value='-'id='d1'className='button'onClick={clickhandler}/>
     <input type='button'value='1'className='button'onClick={clickhandler}/>
     <input type='button'value='2'className='button'onClick={clickhandler}/>
     <input type='button'value='3'className='button'onClick={clickhandler}/>
     <input type='button'value='+'id='d1'className='button'onClick={clickhandler}/>
     <input id='zero' type='button'value='0'className='button'onClick={clickhandler}/>
     <input type='button'value='.'className='button'onClick={clickhandler}/>
     <input type='button'value='='id='d1'className='button' onClick={total}/>
     
    
     
    </div>
    
  )
}

export default App;
