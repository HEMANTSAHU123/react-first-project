
import React,{useState,useContext} from 'react'
import noteContext from '../Context/context';
const NoteBook = () => {
    
// const[name,setName]=useState('');
// const[desc,setDesc]=useState('');
 const context=useContext(noteContext);
// console.log(context.setTotalData());
 //console.log(context.setShowing(4))
// setData(context.setShowing)
// setUserList(context.setData);

const[data,setData]=useState({
    name:"",
    desc:""
})

const[userList,setUserList]=useState([]);

const handleSubmitForm=(event)=>{
    event.preventDefault();
    if(data.name.trim()===0 && data.desc.trim()===0){
      alert("please fill the name and description");
    return;
    }
    if(data.name.length===0){
      alert("please fill the name")
      return;
    }
  if(data.desc.length===0){
    alert ("please fill the description box")
    return ;
  }
   
    setUserList([...userList,data])
    context.setTotalData(prev=>prev+1);
    context.setShowing(prev=>prev+1);
    setData({
         name:"",
    desc:""
    })
    
}
const handleChange=(event)=>{
   const name=event.target.name;
   const value=event.target.value;
    setData({...data,[name]:value});
    if(data.length===0){
      return;
    }

}
const removeActivity = (index) => {
  const updatedList = userList.filter((ele, i) => i !== index); 
  setUserList(updatedList); 
  context.setTotalData(prev=>prev-1);
  context.setShowing(prev=>prev-1);
};
return (
    <>
      <form onSubmit={handleSubmitForm}>
    
        <label >Name</label>
        <input type="text" name='name' value={data.name} onChange={handleChange}/>
        <br/>
       <label>Desc</label>
       <textarea name="desc" value={data.desc} onChange={handleChange}></textarea>
       <br />
       <button type='submit' >Add to book</button>
      </form>
      <ul>
        
       { userList!=[] && userList.map((data,i)=>{
        return (

        <>
         <li key={i}>
          <div>{data.name} {data.desc}
          </div>
        <button onClick={()=>removeActivity(i)}>remove</button>
        </li>
       </>
       )
      })}
      </ul>
    </>
  )
}

export default NoteBook


