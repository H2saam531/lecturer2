import Link from 'next/link'
import React from 'react'
import "./globals.css";


export default  function Lecturers(){
// export const lecturers = () => {
  return (
    <div>
      {/* <div className='overflow-hidden h-full w-full fixed left-[0] top-[0]  overflow-x-hidden [transition:0.5s] bg-[linear-gradient(45deg,_#7da8c5,_#5d7b90,_#3f515e,_#222a30,_#000000)] z-50'> */}
    
    {/* <div className='relative h-15 flex flex-col items-center'> */}
    <div className="grid z-42 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         
    {/* <div className='m-0 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-64 h-20'> */}
    {/* <button className='flex items-center  items-center bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(9,9,121,1)_35%,_rgba(0,212,255,1)_100%)] shadow-[#50d71e] border-[0] rounded-[8px] [box-shadow:rgba(151,_65,_252,_0.2)_0_15px_30px_-5px] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' onClick={() => {localStorage.setItem("department","1");localStorage.setItem("departmentStatus","true");window.location.reload() }}>قسم ارشاد فندقي</button> */}
    <Link href="/lecturers/statistics"><button className='shadow-[#000000] border rounded-[8px] shadow-lg box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4'
    //  onClick={() => {localStorage.setItem("department","1");localStorage.setItem("departmentStatus","true");window.location.reload() }}
     >احصاء فندفي</button></Link>
    {/* <button className='rounded-[8px] shadow-lg border shadow-[#000000] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4'
    //  onClick={() => {localStorage.setItem("department","2");localStorage.setItem("departmentStatus","true");window.location.reload() }}
     >قسم دراسات فندقية</button>
    <button className='rounded-[8px] shadow-lg border shadow-[#000000] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-[24px] md:min-w-[196px] w-full mx-5 my-4' 
    // onClick={() => {localStorage.setItem("department","3");localStorage.setItem("departmentStatus","true");window.location.reload() }}
    >قسم دراسات سياحية</button> */}
      {/* </div> */}
      
            </main>
            </div>
  {/* </div>  */}
       
    </div>
  )
}
