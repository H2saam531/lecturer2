// "use client";

import CustomSelect from "@/app/components/Customs/CustomSelect";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import Exams from "./Exams";

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
// const Fetch = ( { params }) => {
//export default function Page( { params }: { params: {id: string}}) {
export default async function Page( { params }) {
  // console.log(params)
  const { id } = await params
  return (

  <h1>text</h1>
)
}
    
{/* export default Fetch; */}

