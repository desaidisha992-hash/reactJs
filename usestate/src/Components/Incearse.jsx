import React, { useState } from 'react'

const Incearse = () => {

  const [Number, setNumber] = useState(0)
  // Number (first variable) ==> Read Only Value (You Can't this Variable Value)
  // setNumber (Second Variable) ==> Write Only Value (if you want to change Number varibale's value use setNumber)

  function IncreaseNum(){
    setNumber(Number +1)
  
  }

   function DecreaseNum(){
    if(Number > 0) return setNumber(Number -1)
  
  }

   function IncreaseNum1(){
    setNumber(Number+5); 
  }
  function DecreaseNum1(){
    if(Number > 0 ) return setNumber(Number-5); 
  }

  function Reset(){
    setNumber(0);
  }
  return (
   <>
    <section>
      <h1 className= 'text-center text-xl font-extrabold mt-10'>Usestate: Change Data (Variable n Define Karva Mate And Value Change Karva)</h1>
      <p className='text-center mt-5 font-bold'>Increase And Decrease Number</p>
    </section>
    <div className='w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10'>{Number}</div>
    <div className='flex items-center justify-center mt-5 gap-6'>
      <button className='bg-orange-500 px-8 py-4 rounded-xl active:scale-95 active:bg-orange-00' onClick={IncreaseNum}>Increase</button>
      <button className='bg-orange-500 px-8 py-4 rounded-xl active:scale-95 active:bg-orange-400' onClick={DecreaseNum}>Decrease</button>
      <button className='bg-orange-500 px-8 py-4 rounded-xl active:scale-95 active:bg-orange-400' onClick={IncreaseNum1}>Increase 5</button>
      <button className='bg-orange-500 px-8 py-4 rounded-xl active:scale-95 active:bg-orange-400' onClick={DecreaseNum1}>Decrease 5</button>
      <button className='bg-orange-500 px-8 py-4 rounded-xl active:scale-95 active:bg-orange-400' onClick={Reset}>Reset</button>
    </div>

   </>
  )
}

export default Incearse