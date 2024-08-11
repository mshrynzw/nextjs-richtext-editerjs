import React, { useEffect, useRef } from "react"
import EditorJS, { API, OutputData } from "@editorjs/editorjs"
import { EditorTools } from "./EditorTool"
import EditorToolbar from "@/components/EditorToolBar"

interface EditorProps {
  onChange : (data : OutputData) => void;
  defaultValue? : OutputData;
  className? : string; // classNameプロパティを追加
}

const Editor : React.FC<EditorProps> = ({ onChange, className, defaultValue }) => {
  const editorRef = useRef<EditorJS | null>(null)
  const holderId = "editorjs"

  const handleToolClick = (tool) => {
    // ツールを選択したときの処理
    if (editorRef.current) {
      editorRef.current?.blocks.insert(tool)
    }
  }

  useEffect(() => {
    const holder = document.getElementById(holderId)
    if (!editorRef.current && holder) {
      // noinspection TypeScriptValidateTypes
      editorRef.current = new EditorJS({
        holder : holderId,
        data : defaultValue,
        tools : {
          ...EditorTools
        },
        onChange : async () => {
          const content = await editorRef.current?.save()
          if (content) {
            onChange(await content)
          }
        }
      })
    }

    return () => {
      if (editorRef.current && typeof editorRef.current?.destroy === "function") {
        editorRef.current?.destroy()
        editorRef.current = null
      }
    }
  }, [holderId, defaultValue]) // defaultValueを依存関係に追加

  return (
    <div id={holderId} className={className}>
      <EditorToolbar onToolClick={handleToolClick}/>
    </div>
  )
}

export default Editor