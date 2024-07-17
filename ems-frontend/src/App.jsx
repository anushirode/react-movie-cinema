import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './listEmployeeComponent'

function App() {
 return (
        <div>
        <HelloWorld/>
        <ListEmployeeComponent/>
        </div>
  )
}

export default App;
