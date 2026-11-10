// import React,{useState} from 'react'
// function App(){
//   const [message,setMessage] = useState('Hello Student');
//   return(
//     <div>
//       <h1>{message}</h1>
//       <button onClick={()=>setMessage("Welcome to react Class")}>Change Message</button>
//     </div>
//   )

// }

// export default App;

// import {useState} from 'react'
// function App(){
//   const [show,setShow] = useState(true);
//   return(
//     <>
//     <input type={show ? "text" : "password"} placeholder='Enter Password'/>
//     <button onClick={()=> setShow(!show)}>{show ? "Hide" : "Show"}</button>
//     </>
//   )

// }

// export default App;

// import React,{useState} from 'react'
// function App(){
//   const [color,setColor] = useState("red");

//   return(
//     <>
//     <div style={{backgroundColor: color,}}>
//       <h2>Background color Changer</h2>
//     <button onClick={()=>setColor("blue")}>Blue</button>
//     <button onClick={()=>setColor("green")}>Green</button>
//     <button onClick={()=>setColor("tomato")}>Tomato</button>

    
//     </div>
//     </>
//   )

// }

// export default App;

import React,{useState} from 'react'

function App(){
const [name,setName]=useState("");


return(

  <div>
    <h2>Enter Your Name</h2>

    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
    <h3>Hello {name}</h3>
  </div>


)
}
export default App;
