import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {RiMenu5Fill,RiSearchLine}from 'react-icons/ri'
import { useAutoCompleteQuery } from '../app/services'
import { useStateContext } from '../context/StateContext'
const Nav = () => {
  const{autoSearchValue,setSearchV,setAutoSearchValue,searchV,hide,setHide}=useStateContext()
  const autoComplete = useAutoCompleteQuery(autoSearchValue);
  const router=useRouter()
  const Search = (e)=>{
    e.preventDefault();
    setAutoSearchValue('')
    setSearchV(autoSearchValue)
    router.push('/Search')
  }
  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ call submit function here
        Search(event);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });
  return (
    <div className='flex items-center justify-center h-[10vh] w-[100vw] px-5'>
        <div className=" flex items-center justify-self-start gap-2 md:gap-10">
            <button className=""onClick={()=>setHide(!hide)}><RiMenu5Fill className='h-7 w-7 cursor-pointer'/></button>
            <Link href={`/`} ><div className="icons8-youtube cursor-pointer h-14 w-14"></div></Link>
        </div>
        <div className="flex-grow w-full flex justify-center">
          <div className="flex justify-between items-center md:w-[50%] bg-slate-600 py-2 px-4 rounded-lg"><input type='text' placeholder='Search....'value={autoSearchValue} onChange={e => setAutoSearchValue(e.target.value)} className='bg-transparent outline-none w-full'/><RiSearchLine onClick={Search}className='cursor-pointer'/>
          </div>
          <div className="absolute top-16 max-h-[50vh] overflow-hidden  flex flex-col bg-slate-800 w-[60%] md:w-[35%] ">
            {autoSearchValue.length>0? autoComplete?.data?.results.map((data,i)=>(
              <button className="py-3"key={i} onClick={()=>setAutoSearchValue(data)} >{data}</button>
            )):<></>}
          </div>
        </div>
    </div>
  )
}

export default Nav