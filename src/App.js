import { useRef, useState } from 'react';
import data from './data';
import './index.css'

function App() {
  let [paras,setParas]=useState(1)
  let paragraph=data.slice(0,paras)
  console.log(paragraph)
  let inputnNoOfParas=useRef()
  let generateHandler=(event)=>{
    event.preventDefault();
    let enteredParas=Number(inputnNoOfParas.current.value);
    setParas(enteredParas)}
  return (
    <div className="section-center">
      <h3>TIRED OF BORING?</h3>
      <div>
        <form className='lorem-form'>
          <label htmlFor='noofparas'>Paragraphs:</label>
          <input type='number' min={1} max={data.length} id='noofparas' ref={inputnNoOfParas} onChange={generateHandler}></input>
          <button onClick={generateHandler} className='btn'>Generate</button>
        </form>
      </div>
      <div className='lorem-text'>
        {paragraph.map((i)=><p>{i}</p>)}
      </div>
    </div>
  );
}

export default App;
