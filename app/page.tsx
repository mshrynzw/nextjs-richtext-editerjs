"use client"

import { useState } from "react"
import Editor from "@/components/Editor"

export default function Home() {
  const [content, setContent] = useState<any>(null)

  const handleEditorChange = (data : any) => {
    setContent(data)
    console.log(data)
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted content:", content)
    // ここでAPIに送信する処理を追加
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Editor
        className="border border-black min-h-8"
        onChange={handleEditorChange}
      />
      <button type="submit" className="text-white bg-neutral-800 shadow-xl hover:text-black">Submit</button>
    </form>
  )
}
