

// import CustomSelect from "@/app/components/Customs/CustomSelect";
// import { Form, Formik } from "formik";
// import Link from "next/link";
import React from "react";
import Exams from "./Exams";
import "./globals.css";


export async function generateStaticParams() {
const url = "https://secend-pr.shuttleapp.rs/todos";

  const ex = await fetch(`${url}/corses`).then((res) => res.json())
  return (ex.map((exam: any) => ({
    exam: exam.corse_id.toString()
  })))
}

export default async function Exam( { params }: { params: {exam: string}}) {

  const { exam } = await params

  return (
    <Exams exam={params.exam} />

  // <h1>text</h1>
)
}
    
