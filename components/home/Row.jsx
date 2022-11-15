import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import Results from '../Results'
import Loading from './Loading'

const Row = ({type}) => {
  return (
    <div className="overflow-auto">
        <div className="flex gap-3 md:gap-6 w-max px-2 pb-8">

          {!type.isLoading ?type?.data?.contents&& type?.data?.contents?.map((data, id) => (
            <div className="" key={id}>
           <Results data={data} id={id}/>
            </div>
          )):
         <div className="flex items-center gap-3 md:gap-6 justify-center">
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

export default Row