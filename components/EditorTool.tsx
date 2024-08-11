import CheckList from "@editorjs/checklist"
import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import Header from "@editorjs/header"
// import ImageTool from "@editorjs/image"
// import LinkTool from "@editorjs/link"
import List from "@editorjs/list"
import Marker from "@editorjs/marker"
import Quote from "@editorjs/quote"
import Table from "@editorjs/table"

export const EditorTools = {
  header : {
    class : Header,
    shortcut: "CMD+SHIFT+H",
    config : {
      placeholder : "Header",
      levels : [1, 2, 3, 4],
      defaultLevel : 3
    }
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        twitter: true,
      },
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter text",
      captionPlaceholder: "Enter caption",
    },
  },
  delimiter: Delimiter,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
}
