"use client";

import React from 'react'
import "./globals.css";
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { config } from 'process';
var Latex = require("react-latex")
// import { LaTeX } from "@fileforge/react-print";



export default  function Statistics(){
// export const statistics = () => {
const fraction = `$$\\frac{1}{2} $$`
const data = "When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  return (
    <div>
        <div className="grid z-42 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
        <div >
            <h1 className='pt-[250px]'>الاحصاء مقايس النزعة المركزية والتشتت</h1>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-[100px]">
            <h2>مقاييس النزعة المركزية:</h2>
            <ul>
                <li>1- المتوسط الحسابي - 2- الوسيط - 3- المنوال. </li>
                <li></li>
            </ul>
         
           {data}
           <Latex>

           {fraction}
           </Latex>
        </main>
        </div>
   </div>
  )
}
