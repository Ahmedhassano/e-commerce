import React from 'react'

export default function TextContent() {
  return (
    <div className='flex flex-col items-start justify-center gap-2 p-3'>
      <p className=' text-xl text-gray-500'>Hot promotions</p>
      <h1 className='text-4xl font-bold'>Fashion trending <br/>
        <span className=' text-Primary  '>
          Great Collection
        </span>
     </h1>
      <p className=' text-gray-400'>save more with counpons up to 20%off</p>
      <button className=' px-2 py-1 rounded-sm text-white bg-Primary2'>shop new</button>
    </div>
  )
}
