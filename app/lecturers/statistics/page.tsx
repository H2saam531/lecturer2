
import React from 'react'
import "./globals.css";
import Statistices from './Statistics';


export default  function Statistics(){
// export const statistics = () => {
const fraction = `$$\\frac{1}{2} $$`
const data = "When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  return (
    <div>
      {/* <Statistices /> */}
        <div className="grid z-42 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-[100px]">
        <div >
            <h1>قريبا.</h1>
        </div>
     
        </main>
        </div>
   </div>
  )
}
