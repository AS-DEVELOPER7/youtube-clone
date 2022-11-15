import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
            <div className="w-[17em] h-[10em] rounded-lg bg-loading"></div>
            <div className="w-[17em] h-[1em] rounded-lg bg-loading"></div>
            <div className="flex items-center justify-between w-full"><div className="w-[5em] h-[1em] rounded-lg bg-loading"></div><div className="w-[5em] h-[1em] rounded-lg bg-loading"></div><div className="w-[5em] h-[1em] rounded-lg bg-loading"></div></div>
            </div>
  )
}

export default Loading