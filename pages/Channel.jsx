import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdOutlineOndemandVideo, MdOutlineVideoLibrary } from 'react-icons/md'
import { RiPlayList2Fill } from 'react-icons/ri'
import { useChannelDetailsQuery, useChannelVideosQuery } from '../app/services'

import Loading from '../components/home/Loading'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'

const Channel = () => {
  const{channelId,setHome}=useStateContext()
  const channelDetails=useChannelDetailsQuery(channelId)
  const channelVideos=useChannelVideosQuery(channelId)
  // console.log(channelVideos)
  useEffect(()=>{
    setHome(false)
    channelId.length===0?Router.push('/'):''
   },[channelId])
  return (
    <div className='w-full flex flex-col items-start gap-5'>
      {!channelDetails.isLoading ?<img src={channelDetails?.data?.banner?.desktop[0]?.url} className=' w-full rounded-xl px-2'/>:<div className='bg-loading w-full rounded-xl h-28 px-2'></div>}
      <div className="flex items-center gap-5">
      {!channelDetails.isLoading ?<img src={channelDetails?.data?.avatar[2]?.url} className='h-14 rounded-full'/>:<div className='bg-loading h-14 w-14 rounded-full'></div>}
        <div className="flex flex-col items-start gap-1">
        {!channelDetails.isLoading ? <p className='text-lg font-semibold'>{channelDetails?.data?.title}</p>:<div className='bg-loading w-24 h-5 rounded-lg'></div>}
        {!channelDetails.isLoading ? <p className='text-slate-600'>{channelDetails?.data?.stats?.subscribersText}</p>:<div className='bg-loading w-24 h-5 rounded-lg'></div>}
        </div>
      </div>

      <pre className='w-[80%] font-sans overflow-hidden '>
        {channelDetails?.data?.description}
      </pre>
      <p className='font-bold text-xl mt-5'>Videos</p>
      <div className='layout w-full'>
        {!channelVideos.isLoading ?channelVideos?.data?.contents&&channelVideos?.data?.contents?.map((data,id)=>(
          <div key={id}>{data?.type==='playlist'?''
          :<Results data={data} id={id}/>
        }</div>
        ))
      :
      <div className="layout w-max">
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
          <Loading/>
         </div>
      }
      </div>
      
    </div>
  )
}

export default Channel