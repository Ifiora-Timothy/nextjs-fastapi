"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState(null);
  // get dummy reuest

const getDummyRequest = async () => {
  const response = await fetch("/api/py/helloFastApi");
  const data = await response.json();
  setData(data);
  console.log(data);
}

  return (
    <main>

      <p>get dummy request</p>
      <button onClick={getDummyRequest}>Get Dummy Request</button>
      <p>{JSON.stringify(data??"") }</p>
      </main>
    
  );
}
