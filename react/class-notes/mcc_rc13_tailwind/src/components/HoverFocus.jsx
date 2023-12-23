import React from 'react'

const HoverFocus = () => {
  return (
    <>

    <div>HoverFocus</div>
    <button className='w-40 py-2 mx-1 shadow-slate-600 rounded-xl bg-sky-500 text-slate-50 hover:shadow-lg'>save</button>
    <button className="w-20 py-2 mx-1 text-white bg-yellow-500 rounded hover:bg-green-700 focus:ring-4 focus:ring-yellow-300">yellow</button>
    <input type="email"  className='w-1/3 border-green-500 border-x-2 outline-dashed peer'/>
    
    <p className='invisible mt-2 peer-invalid:visible'>Provide a valid email</p>
    </>
  )
}

export default HoverFocus