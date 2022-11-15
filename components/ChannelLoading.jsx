import React from 'react'

const ChannelLoading = () => {
  return (
    <div className="w-[17em] gap-3 flex flex-col items-center justify-start">
    <div className="h-[10em] w-[10em] rounded-full bg-loading"></div>
    <div className="h-5 w-20 rounded-lg bg-loading"></div>
    <div className="h-5 w-28 rounded-lg bg-loading"></div>
  </div>
  )
}

export default ChannelLoading