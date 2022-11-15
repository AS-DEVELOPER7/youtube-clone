import  Router  from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSearchPageQuery } from '../app/services'
import Loading from '../components/home/Loading'
import Results from '../components/Results'
import { useStateContext } from '../context/StateContext'
import{GoSettings}from 'react-icons/go'
const Search = () => {
  const{filter,setFilter,searchV,setHome}=useStateContext()
  const [filterOpen,setFilterOpen]=useState(false)
    const handleFilter=(filter)=>{
      setFilter(filter)
      // console.log(filter)
    }
    const SearchPage=useSearchPageQuery(searchV,filter)
    useEffect(()=>{
      setHome(false)
     },[])
    // console.log(SearchPage)
  return (
    <div>
      {/* filters */}
      <div className="flex items-center justify-between w-full mb-5 text-lg font-semibold px-5">
        <p className=''>Search: {SearchPage?.originalArgs}</p>
          <button onClick={()=>setFilterOpen(!filterOpen)} className="flex items-center gap-2 "><GoSettings/>Filters</button>
      </div>
      {filterOpen?
      
      <div className='flex items-start justify-evenly  w-full h-max text-slate-300 my-5'>
            {SearchPage?.data?.filterGroups?.map((filter,id)=>(
              <div className="flex flex-col gap-4" key={id}>
                <p className='font-semibold text-sm md:text-lg'>{filter.title}</p>
                {filter.filters.map((f,id)=>(
                  <div className="text-xs text-start md:text-sm" key={id}>
                    <button className='hover:text-gray-100 hover:scale-110'onClick={()=>handleFilter(f.cursorSelect)}>{f.label}</button>
                  </div>
                ))}
              </div>
            ))}
      </div>
      :''}    
      {/* results */}
      <div className='layout'>
      {!SearchPage.isLoading ?SearchPage?.data?.contents&& SearchPage?.data?.contents?.map((data, id) => (  
         <div key={id}>
         {data?.type==='playlist'?''
        :<div key={id}><Results data={data} id={id}/></div>
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
    </div>
  )
}

export default Search