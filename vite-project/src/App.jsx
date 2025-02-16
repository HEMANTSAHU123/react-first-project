import React from 'react'
import NoteBook from './components/NoteBook'
import NoteTitle from './components/NoteTitle'
import ContextProvider from './Context/ContextProvider'
const App = () => {
  return (
  <>
  <ContextProvider>
   <NoteBook/>
   <NoteTitle/>
  </ContextProvider>
 </>
  )
}

export default App
