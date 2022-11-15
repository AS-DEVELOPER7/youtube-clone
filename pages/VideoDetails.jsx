import Link from 'next/link'
import  Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { HiChatBubbleLeftEllipsis } from 'react-icons/hi'
import { useVideoCommentsQuery, useVideoDetailsQuery, useVideoRelatedContentsQuery, useVideoStreamingDataQuery } from '../app/services'
import Loading from '../components/home/Loading'
import { useStateContext } from '../context/StateContext'
const VideoDetails = () => {
  const {setChannelId,setVideoId,videoId,setHome}=useStateContext()
  const videoDetails=useVideoDetailsQuery(videoId)
  const videoStreamingData=useVideoStreamingDataQuery(videoId)
  const videoRelatedContent=useVideoRelatedContentsQuery(videoId)
  const [type,setType]=useState()
  const [commentType,setCommentType]=useState('Top comments')
  const videoComment=useVideoCommentsQuery({videoId,type})
  // console.log(videoComment)
  useEffect(()=>{
    setHome(false)
    videoId.length===0?Router.push('/'):setType(videoComment?.data?.filters[0]?.cursorFilter)
   },[])
  const commentHandle=(title,type)=>{
    setType(type)
    setCommentType(title)
  }
  const channel = (channelId) => {
    setChannelId(channelId);
    // console.log(channelId);
    Router.push("/Channel");
  };
  const video=(videoId)=>{
    setVideoId(videoId)
    // console.log(videoId)
    Router.push('/VideoDetails')
  }
  return (
    <div className='lg:flex min-h-screen w-[100%] '>
      {/* left */}
      <div className="flex justify-start flex-col w-[99%] lg:w-[70%] gap-5 ">
        {/* video */}
        {
         !videoStreamingData.isLoading ? videoStreamingData?.data?.isProtectedContent?<div className='w-full h-[40vh] md:h-[50vh] lg:h-[67vh] bg-slate-700 flex items-center justify-center'>Video Is Not Available</div>:
         <video src={videoStreamingData?.data?.formats[1]?.url} className='w-full h-[40vh] md:h-[50vh] lg:h-[67vh] outline-none' controls autoPlay/> 
         :<div className='bg-loading w-full h-[40vh] md:h-[50vh] lg:h-[67vh] rounded-lg'></div>
      }
        {/* title and likes info */}
        <div className="flex flex-col gap-5">
          {!videoDetails.isLoading ?<p className='text-xl md:text-2xl tracking-wide font-semibold'>{videoDetails?.data?.title}</p>:<div className='bg-loading w-full h-5 rounded-lg'></div>}
          <div className="flex  items-center justify-between pt-2">
            <div className="flex items-center gap-5 text-slate-400">
            {!videoDetails.isLoading ?<p>{videoDetails?.data?.stats?.views} Views</p>:<div className='bg-loading w-20 h-5 rounded-lg'></div>}
            {!videoDetails.isLoading ?<p>{videoDetails?.data?.publishedDate}</p>:<div className='bg-loading w-20 h-5 rounded-lg'></div>}
            </div>
            {!videoDetails.isLoading ?
             <div className="md:flex items-center gap-5  hidden">
             <div className="bg-slate-500 p-2 px-4 flex items-center gap-2 rounded-full"><AiFillLike/>{videoDetails?.data?.stats?.likes}</div>
             <div className="bg-slate-500 p-2 px-4 flex items-center gap-2 rounded-full"><BsFillChatLeftFill/>{videoDetails?.data?.stats?.comments}</div>
           </div>
            :<div className=' md:flex items-center gap-5  hidden'>
              <div className="bg-loading h-10 w-24 rounded-full"></div>
              <div className="bg-loading h-10 w-24 rounded-full"></div>
              </div>}
          </div>
        </div>
        {/* description and channel info */}
        <hr/>
        <div className="flex flex-col gap-7">
          <div className="flex items-center  gap-5">
          {!videoDetails.isLoading ?
            <Link href={`/Channel`}><img src={videoDetails?.data?.author?.avatar[0]?.url} onClick={()=>channel(videoDetails?.data?.author?.channelId)} className='rounded-full cursor-pointer'/></Link>:<div className='bg-loading rounded-full cursor-pointer h-10 w-10'></div>}
            <div className="flex flex-col">
            {!videoDetails.isLoading ? <Link href={`/Channel`}><p className='text-xl font-semibold cursor-pointer' onClick={()=>channel(videoDetails?.data?.author?.channelId)}>{videoDetails?.data?.author?.title}</p></Link>:<div className='bg-loading w-24 h-5 rounded-lg'></div>}
            {!videoDetails.isLoading ?<p className='text-slate-400'>{videoDetails?.data?.author?.stats?.subscribersText}</p>:<div className='bg-loading w-24 h-5 rounded-lg'></div>}
            </div>
          </div>
          <div className="w-full truncate">
            <pre className="font-sans text-sm md:text-base">{ videoDetails?.data?.description}</pre>
          </div>
        </div>
        {/* comments */}
        <div className="flex flex-col gap-7 mt-5">
        <hr/>
        <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 md:items-center justify-between">
          <p className='text-xl font-bold tracking-widest'>COMMENTS</p>
          <div className=" flex items-center gap-5">
            {!videoComment?.isLoading?
            videoComment?.data?.filters.map((data,id)=>(
              <button className={` text-base px-3 py-2 rounded-full ${commentType===data.title?'bg-slate-500':'bg-slate-700'}`} onClick={()=>commentHandle(data.title,data.cursorFilter)} key={id}>{data.title}</button>
            ))
            :<div className='flex items-center gap-5'>
              <div className='h-10 w-28 rounded-full bg-loading'></div>
              <div className='h-10 w-28 rounded-full bg-loading'></div>
              </div>}
          </div>
        </div>
          <div className="flex flex-col">
            {videoComment?.data?.comments?.map((comment,id)=>(
              <div className="flex items-start gap-5  h-max my-5" key={id}>
                <img src={comment.author.avatar[0].url}className='rounded-full'/>
                <div className="flex flex-col gap-5 items-start">
                  <div className="flex gap-5 text-sm md:text-base">
                  <p className='font-semibold '>{comment.author.title}</p>
                  <p className='text-slate-500'>{comment.publishedTimeText}</p>
                  </div>
                <p className='text-base'>{comment.content}</p>
                <div className="flex items-center gap-10">
                  <div className="bg-slate-500 p-1 px-4 flex items-center gap-2 rounded-full"><AiFillLike/>{comment.stats.votes}</div>
                  <div className="bg-slate-500 p-1 px-4 flex items-center gap-2 rounded-full"><BsFillChatLeftFill/>{comment.stats.replies}</div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="lg:w-[30%] ">
        <div className="md:w-[50%] lg:w-[70%] lg:mx-auto flex flex-col">
          <p className='text-3xl mb-5 lg:text-xl font-semibold'>Related</p>
          {
           !videoRelatedContent.isLoading ?videoRelatedContent?.data?.contents&& videoRelatedContent?.data?.contents?.map((data,id)=>(
              <div className="mb-10 flex gap-2 flex-col items-start cursor-pointer" key={id} onClick={()=>video(data.video.videoId)}>
                <img src={data.video.thumbnails[0].url} className='w-[100%] rounded-xl' alt="" />
                <p className='truncate w-full '>{data.video.title}</p>
                <div className="flex items-center justify-between w-full text-xs text-slate-400">
                  <p>{data.video.stats.views}Views</p>
                  <p className='truncate max-w-[50%] '>{data.video.author.title}</p>
                </div>
              </div>
            ))
            :<div className='flex flex-col gap-5'>
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
    </div>
  )
}

export default VideoDetails