import  noteContext from "./context";
import React,{useState} from 'react'

const ContextProvider = (props) => {
  const[totalData,setTotalData]=useState(0);
  const[showing,setShowing]=useState(0);
  const[userlist,setUserList]=useState([])


  const addNote = (note) => {
    setUserList([...userList, note]);
    setTotalData(prev => prev + 1);
    setShowing(prev => prev + 1);
};

const removeNote = (index) => {
    const updatedList = userList.filter((_, i) => i !== index);
    setUserList(updatedList);
    setTotalData(prev => prev - 1);
    setShowing(prev => prev - 1);
};

  return (

    <noteContext.Provider value={{
      setUserList,
      userlist,
      setTotalData,
      setShowing,
      totalData,
      showing,
      addNote,
      removeNote
    }}>
     {props.children}

      </noteContext.Provider>
    
  )
}

export default ContextProvider
