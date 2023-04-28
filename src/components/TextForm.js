import React, { useState } from 'react'
export default function TextForm(props) {
const[text, setText]=useState('');
const handleupclick= ()=>{
    console.log('You have clicked on convert to uppercase' + text);
    let Newtext= text.toUpperCase();
    setText(Newtext);
}
const handleloclick= ()=>{
    // console.log('You have clicked on convert to lowercase' + text);
    let Newtext= text.toLowerCase();
    setText(Newtext);
}
const handleclearclick= ()=>{
   
    let Newtext= '';
    setText(Newtext);
}

const handleonchange= (event) =>{
    console.log('on change');
    setText(event.target.value);
}
return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
    <h1 className="my-3">Text Editer</h1>
        <div >
        <textarea value={text} className='form-control' style={{background:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}} onChange={handleonchange}  id="myBox"></textarea>
        </div>
        <button onClick={handleupclick}>convert to uppercase</button>
        <button onClick={handleloclick}>convert to lowercase</button>
        <button onClick={handleclearclick}>Clear</button>
      
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <h3>{text}</h3>
    </div>
    </>
  )
}
