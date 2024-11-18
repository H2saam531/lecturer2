// "use client";

import CustomSelect from "@/app/components/Customs/CustomSelect";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import Exams from "./Exams";

  export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
// const Fetch = ( { params }) => {
export default function Page( { params }: { params: {id: string}}) {
  // console.log(params)
  return (
  <Exams id={params} />
)
}
    
{/* export default Fetch; */}

