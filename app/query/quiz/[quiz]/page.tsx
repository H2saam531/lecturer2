import React from "react";
import Quizs from "./Quizs";

export async function generateStaticParams() {
  const url = "https://secend-pr.shuttleapp.rs/todos";
  
    const ex = await fetch(`${url}/corses`).then((res) => res.json())
    return (ex.map((quiz: any) => ({
      quiz: quiz.corse_id.toString()
    })))
  }
export default async function Quiz( { params }: { params: {quiz: string}}) {

  const { quiz } = await params

  return (
    <Quizs quiz={params.quiz} />

  // <h1>text</h1>
)
}
    
