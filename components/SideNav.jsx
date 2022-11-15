import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'
const SideNav = () => {
  const {links,selected,setSelected,setSearchValue,hide}=useStateContext()
 const clickhandle=(type)=>{
  setSelected(type)
  setSearchValue(type)
 }
  return (
    <div className={`flex flex-col items-start px-7 fixed overflow-hidden h-screen pt-7 gap-7  ${hide?'w-[8vw] ':'w-[16vw] '} `}>
        {links.map((link,i)=>(
          <Link href={`${link.Link}`} key={i} className=''>
            <div className={`flex items-center gap-3 cursor-pointer text-2xl hover:scale-110 duration-100 ease-in transition-all ${selected===link.title?'text-red-500':''}`}onClick={()=>clickhandle(link.title)}>
            {selected===link.title?<link.FillIcon className=''/>:<link.OutlineIcon className=''/>}
            {hide?<></>:<p className='text-lg font-semibold invisible md:visible'>{link.title}</p>}
            </div>
            </Link>
        ))}
    </div>
  )
}

export default SideNav