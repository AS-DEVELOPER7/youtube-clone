import Head from 'next/head'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Nav from './Nav'
import SideNav from './SideNav'
const Layout = ({children}) => {
  const {hide}=useStateContext()
  return (
    <div className='bg-slate-800  text-text1 '>
      <Head>
        <title>
          Youtube-clone
        </title>
      </Head>
<header>
</header>
<main className=''>
  <div className="fixed top-0">
  <Nav/>
  </div>
  <div className="w-[100vw] flex  h-[100vh] pt-20 gap-5 md:gap-0 ">
    <div className={`${hide?'md:w-[8vw]':'md:w-[16vw]'}`}>
      <SideNav/>
    </div>
    <div className={`${hide?'md:w-[92vw]':'md:w-[84vw]'} ml-14 md:ml-4 overflow-x-hidden`}>
      {children}
    </div>
  </div>
</main>
     
    </div>
  )
}

export default Layout