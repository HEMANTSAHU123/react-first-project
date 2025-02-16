import React,{useState,useContext} from 'react'
import noteContext from '../Context/context';
const NoteTitle = () => {
  const [search,setSearch]=useState('');

  const searchHandle=(event)=>{
    setSearch(event.target.value);

  }
  const context=useContext(noteContext)
  const filteredList = context.userList.filter(
    (note) =>
        note.name.toLowerCase().includes(search.toLowerCase()) ||
        note.desc.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
   <h1>Note Title</h1>
   <label>Search note:</label>
   <input type="text"
     value={search} 
     onChange={searchHandle}/>
     <br />
   <label>total note:{context.totalData}</label>
   <br />
   <label>showing:{context.showing}</label>
   <ul>
                {filteredList.map((note, i) => (
                    <li key={i}>
                        <div>
                            {note.name} {note.desc}
                        </div>
                    </li>
                ))}
            </ul>
   </>
  )
}

export default NoteTitle;
