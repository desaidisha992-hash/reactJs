import React, { useState } from 'react'

const App = () => {
 const[Title,setTitle] = useState ("");
 const[Notes,setNotes] = useState ("");
 const[Tasks,setTasks] = useState ([]);
 function SubmitForm (){
  console.log("Task Added", {Heading: Title, List: Notes})
  let newTask = [...Tasks];
  newTask.push({ Heading: Title, List: Notes});
  setTasks(newTask);

  console.log(Tasks);

  setTitle("");
  setNotes("");
 }

  return (
    <>
      <section className='lg:flex items-center justify-center'>
        {/* 1024(lg / max-lg) thi small screen mate => flex nahi lagu padse */}
        {/* 1024(lg) thi big screen mate => flex lagu padse */}

        {/* form for add new task / Submit From UI*/}

        <div className='lg:w-1/2 w-full h-screen flex items-center justify-center p-4'>
       <div className='bg-black/10 max-w-sm p-2 rounded-3xl'>
         <form className='bg-black text-white w-full rounded-2xl p-6' onSubmit={(e) =>{
          e.preventDefault();
          SubmitForm();
         }}>
          <h1 className='text-center text-4xl font-bold my-1'>Add Your Task</h1>
          <input className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white font-semibold" type="text" placeholder='Heading'  value={Title} onChange={ (e) => {
            setTitle(e.target.value);
          }}/>
          <textarea rows={8} className="w-full px-4 py-2 bg-[#222] rounded-md my-2 text-white" placeholder='Notes...' value={Notes} onChange={ (e) => {
            setNotes(e.target.value)
          }}></textarea>
          <input type="submit" value="Add Task" className='w-full bg-white text-black rounded-md font-semibold px-4 py-2 my-2 active:scale-95 active:bg-white/50 active:text-white'
           onChange={ (e) => {
            setTasks(e.target.value);
          }}/>
        </form>
       </div>
        </div>

        {/* div for show old tasks / UI For Notes */}
        <div className='lg:w-1/2 w-full h-screen lg:border-l-2 max-lg:border-t-2 border-gray-200 flex flex-wrap justify-center items-center p-6 gap-6 overflow-auto'>
{Tasks.map((Task,id) =>{
  return(
    
        <div className=' w-full max-w-78 h-78 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-2 relative' key={id}>
          <img src="./pin2.png" alt="" className='w-15 h-10 absolute z-10 top-2' />
          <div className=' w-full h-60 bg-orange-200 rounded-4xl p-4'> 
            <h1 className='text-3xl font-semibold my-1 text-center'>{id + 1}</h1>
            <h1 className='text-4xl font-semibold text-center my-1'>{Task.Heading}</h1>
            <p className=' font-medium text-xl text-gray-400'>{Task.List}</p>

          </div>
        </div>
  )
})}


        </div>

      </section>
    </>
  )
}

export default App