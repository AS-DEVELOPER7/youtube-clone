import Router from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Loading from './home/Loading'

const Results = ({data,id}) => {
  const{setChannelId,setVideoId,home}=useStateContext()
  const channel=(channelId)=>{
    setChannelId(channelId)
    // console.log(channelId)
    Router.push('/Channel')
  }
 
  const videoDetails=(videoId)=>{
    setVideoId(videoId)
    // console.log(videoId)
    Router.push('/VideoDetails')
  }
  return (
    <div className={`${home?'w-[12em] md:w-[17em]':'w-[90%]'} mx-2 flex flex-col items-start justify-start gap-2 overflow-hidden`} key={id}  >
      {data?.type==='video'?
      <>
              <img
              src={data?.video?.thumbnails[0]?.url}
              className={`${home?'h-[7em] ':'h-[10em]'} md:h-[10em] w-full cursor-pointer rounded-lg`} onClick={()=>videoDetails(data?.video?.videoId)}
              />
              <div className="flex items-center w-full justify-start gap-5">
                {/* <img src={data?.video?.author?.avatar[0]?.url} alt=""className='h-6 rounded-full' /> */}
                <p className='text-xs truncate'>{data?.video?.title}</p>
              </div>
              <div className="flex items-center justify-between w-full text-[0.6em] md:text-xs text-slate-400 text-center">
                <p>Views: {data?.video?.stats?.views}</p>
                <p>{data?.video?.publishedTimeText}</p>
                <button onClick={()=>channel(data?.video?.author?.channelId)}>{data?.video?.author?.title}</button>
              </div>
      </>
            :data?.type==='playlist'?''
            :
           <> 
            <img
            src={data?.channel?.avatar[1]?.url}
            className="h-[10em] w-[60%] cursor-pointer rounded-full mx-auto"onClick={()=>channel(data?.channel?.channelId)}
            />
            <div className="flex items-center w-full justify-start gap-5">
                {/* <img src={data?.video?.author?.avatar[0]?.url} alt=""className='h-6 rounded-full' /> */}
                <p className='text-xs truncate'>{data?.channel?.title}</p>
              </div>
              <div className="flex items-center justify-between w-full text-xs text-text2">
                <p>{data?.channel?.stats?.subscribersText}</p>
                <p>Videos:{data?.channel?.stats?.videos}</p>
                
              </div>
            </>
            }
              
            </div>
  )
}

export default Results