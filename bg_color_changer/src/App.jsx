import { useState } from "react"

function App() {
  const [color,setcolor] = useState("black")

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center duration-200" 
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 rounded-3xl
          p-3.5"> 
          <button onClick = {()=>setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style ={{backgroundColor:"red"}}> Red </button>

          <button onClick = {()=>setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style ={{backgroundColor:"green"}}> Green </button>

          <button onClick = {()=>setcolor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style ={{backgroundColor:"skyblue"}}>Blue </button>

          <button onClick = {()=>setcolor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style ={{backgroundColor:"olive"}}>Olive </button>

          </div>


        </div>



      </div>
      
    </>
  )
}

export default App
