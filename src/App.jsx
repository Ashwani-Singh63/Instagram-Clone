import { useState } from 'react'
import Navbar from './Components/Navbar'
import Feedback from './Components/Feedback'
import Suggestion from './Components/Suggestion'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex '>
        <Navbar/>
        <div className='h-[100vh] w-[0.10rem] bg-slate-300'></div>
        <Feedback/>
        <Suggestion/>
     </div>
    </>
  )
}

export default App
