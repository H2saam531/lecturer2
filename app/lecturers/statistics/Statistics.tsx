"use client";

import React from 'react'
import "./globals.css";
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { config } from 'process';
// import renderMathInElement from 'katex';
// import { withContentlayer } from 'next-contentlayer'
var Latex = require("react-latex")
// import { LaTeX } from "@fileforge/react-print";



export default  function Statistics(){
// export const statistics = () => {
const fraction = `$$\\big( \\frac{1}{2} \\Bigg} $$`
const fraction3 = `$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$`
const fraction2 = `\\displaystyle\\sum_{i=1}^{10} t_i `
const data = "When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
const data2 =  '\\begin{array}{cc} a & b \\\\ c & d \\end{array}';
// const data2 = "\\displaystyle\\sum_{i=1}^{10} t_i \\";
  return (
    <div>
        <div className="grid z-42 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   gap-16  font-[family-name:var(--font-geist-sans)]">
        <div >
            <h1 className='pt-[250px]'>الاحصاء مقايس النزعة المركزية والتشتت</h1>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-[100px]">
            <h2>مقاييس النزعة المركزية:</h2>
            <ul>
                <li>1- المتوسط الحسابي</li>
                <li>2- الوسيط</li>
                <li>3- المنوال</li>
                <p>محموع انحرافات القيم عن متوسطها الحسابي يساوي صفر (0)   <br></br>  <Latex displayMode={true}>{data2}</Latex></p>
            </ul>
            <br></br>
         
           {/* <Latex>

           {fraction}
           </Latex> */}
           {/* {data} */}
           {/* <p>∑n=1+∞1n2</p>
           <p>
  The infinite sum
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  is equal to the real number
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac></math>.
</p> */}

        </main>
        </div>
   </div>
  )
}
