// // "use client";

// import CustomSelect from "@/app/components/Customs/CustomSelect";
// import { Form, Formik } from "formik";
// import Link from "next/link";
// import React from "react";
// //import Exams from "./Exams";

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }
// // const Fetch = ( { params }) => {
// export default async function Exam( { params }: { params: {id: string}}) {
// //export default async function Page( { params }) {
//   // console.log(params)
//   const { id } = await params
//   console.log
//   return (

//   <h1>text</h1>
// )
// }
    
{/* export default Fetch; */}

import React from "react";
import JsonData from "@/libs/data.json";
import LaptopsRender from "@/components/LaptopsRender";

async function getLaptopData(params) {
  const laptops = JsonData?.find((record, i) => {
    return record?.brand?.toLowerCase() === params?.laptop?.toLowerCase();
  });
  return laptops;
}

export async function generateStaticParams() {
  return [
    { laptop: "Apple" },
    { laptop: "Infinix" },
    { laptop: "Royal_Mirage" },
    { laptop: "Microsoft_Surface" },
    { laptop: "Nokia" },
    { laptop: "HP_Pavilion" },
  ];
}
export default async function Page({ params }) {
  const finalData = await getLaptopData(params);

  return (
    <div>
      <LaptopsRender data={finalData} />
    </div>
  );
}