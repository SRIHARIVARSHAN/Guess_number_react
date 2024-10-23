import { useState } from 'react';
import './Game.css';
import './Result.js';
import Result from './Result.js';
const secretNum=Math.floor(Math.random()*100)+1;


function Game(){
        const[term,setTerm] = useState("")

        const hdlchg= (e)=>{
            setTerm(e.target.value)
        }
    
    return(
        <div className='container'>
            <div className='head'>
                <label>Guess a Number from 1 to 100  </label>
            </div>
            <input id='term' type='text' name='term' onChange={hdlchg}/>
            <Result secretNum={secretNum} term={term}/>
        </div>
    );
    
}
export default Game;