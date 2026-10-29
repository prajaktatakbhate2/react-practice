import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() 
{
    let name = 'Test';
    let age =18;
    let add = 'pune';

    let styling ={
        backgroundColor:"green",
        color:"white",
        fontSize : "15px",
        textAlign : "center"
    }
 

  return (
   <div>
    <h1 className='HEAD'>Welcome to react Application</h1> 

    <p style={{backgroundColor:"red"}}>Name : {name}</p>

    <p>Age : {age >= 18 ? "adult" : "minor"}</p>

    <p style={styling}>Add : {add + ", Maharastra"}</p>
   {/*//each tag close krav lagto 
    //on click
   */} 

    </div>

   
  )

  
}

export default App
