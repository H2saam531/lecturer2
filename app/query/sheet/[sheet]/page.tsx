import React from "react";
import Sheets from "./Sheets";

export async function generateStaticParams() {
  const url = "https://secend-pr.shuttleapp.rs/todos";
  
    const ex = await fetch(`${url}/corses`).then((res) => res.json())
    return (ex.map((sheet: any) => ({
      sheet: sheet.corse_id.toString()
    })))
  }
// const Fetch = ( { params }) => {
export default async function Sheet( { params }: { params: {sheet: string}}) {

  const { sheet } = await params

  return (
    <Sheets sheet={params.sheet} />

  // <h1>text</h1>
)
}
    
