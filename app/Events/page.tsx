import React from "react";
import Eventes from "./Eventes";
import "./globals.css";

export async function generateStaticParams() {
  const url = "https://secend-pr.shuttleapp.rs/todos";
  
    const ex = await fetch(`${url}/getEvent`).then((res) => res.json())
    return (ex.map((quiz: any) => ({
      quiz: quiz.corse_id.toString()
    })))
  }
export default async function Event( { params }: { params: {event: string}}) {

  const { event } = await params

  return (
    <Eventes event={params.event} />

  // <h1>text</h1>
)
}
    