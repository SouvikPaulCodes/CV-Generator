import { useState } from 'react'
import '../styles/App.css'
import data from './data.js'
import {Header} from './Header.jsx'
import {Form} from './FormFill.jsx'
import {Resume} from './Resume.jsx'

function App() {
  const [state, setState] = useState("edit");
  const [formData, setformData] = useState(data)
  const [back, setBack] = useState("Dark")

  const changeState = (e) => {
    e.preventDefault()
    state==="edit" ? setState("submit") : setState("edit");
  }

  const changeBack = (e) => {
    e.preventDefault()
    back==="Dark" ? setBack("Light") : setBack("Dark")
  }

  return (
    <>
      <Header clBack={back} chBack={changeBack} />
      {state==="edit" ? (<Form clBack={back} change={changeState} data={formData} setData={setformData} /> 
      ): (<Resume clBack={back} change={changeState} data={formData} />)}
    </>
  )
}

export default App
