import React from "react";
import Researchs from "./Researchs";
import "./globals.css";

export async function generateStaticParams() {
  const url = "https://secend-pr.shuttleapp.rs/todos";
  
    const ex = await fetch(`${url}/corses`).then((res) => res.json())
    return (ex.map((research: any) => ({
      research: research.corse_id.toString()
    })))
  }
export default async function Research( { params }: { params: {research: string}}) {

  const { research } = await params

  return (
    <Researchs research={params.research} />

  // <h1>text</h1>
)
}
    
