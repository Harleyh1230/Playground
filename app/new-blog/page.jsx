"use client"
import "./styles.css"
import { MDXRemote } from "next-mdx-remote/rsc";
import { useState } from "react";


export default function page() {
    const [value, setValue] = useState(`# title`); 

  return (
    <div>page
      <div>
      <textarea className="w-full h-16" value={value} onChange={(e) => setValue(e.target.value)}/>

      </div>
        <hr className="my-2" />
        <div className="bg-gray-900 p-4 rounded-md">
        <MDXRemote source={value} />
        </div>
    </div>
  )
}
