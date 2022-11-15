import  Router  from 'next/router';
import React, { useEffect } from 'react'
import { useSearchQuery } from '../app/services';
import Loading from '../components/home/Loading';
import Results from '../components/Results';
import { useStateContext } from '../context/StateContext'

const Explore = () => {
  const {searchValue,setVideoId,setChannelId,setHome}=useStateContext()
  const search = useSearchQuery(searchValue);
 useEffect(()=>{
  setHome(false)
 },[])
  // console.log(search)  
  return (
    <div className='layout'>
      {!search.isLoading ?search?.data?.contents&& search?.data?.contents?.map((data, id) => (
        <div key={id}>
        {data?.type==='playlist'?''
        :<Results data={data} id={id}/>
      }
            </div>
          )):
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
  )
}

export default Explore