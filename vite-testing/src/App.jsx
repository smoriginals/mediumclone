import React from 'react'
import { useApp } from './context/AppContext';
function App() {

    const { count } = useApp();
    console.log(count);

  return (
    <>
          <p>Hello World</p>
          
    </>
  )
}

export default App
