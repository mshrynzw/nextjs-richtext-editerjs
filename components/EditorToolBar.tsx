import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk, faHeading, faHighlighter, faList, faQuoteLeft, faTableCells } from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"

const EditorToolbar = ({ onToolClick }) => {
  return (
    <div className="editor-toolbar space-x-4">
      <button onClick={() => onToolClick("header")} title="Header">
        <FontAwesomeIcon
          icon={faHeading}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      <button onClick={() => onToolClick("checklist")} title="Checklist">
        <FontAwesomeIcon
          icon={faSquareCheck}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      <button onClick={() => onToolClick("list")} title="List">
        <FontAwesomeIcon
          icon={faList}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      <button onClick={() => onToolClick("quote")} title="Quote">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      <button onClick={() => onToolClick("delimiter")} title="Delimiter">
        <FontAwesomeIcon
          icon={faAsterisk}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      <button onClick={() => onToolClick("table")} title="Table">
        <FontAwesomeIcon
          icon={faTableCells}
          className={
            "fas fa-tv"
          }
          size="2x"
        />
      </button>

      {/*<button onClick={() => onToolClick("Marker")} title="marker">*/}
      {/*  <FontAwesomeIcon*/}
      {/*    icon={faHighlighter}*/}
      {/*    className={*/}
      {/*      "fas fa-tv"*/}
      {/*    }*/}
      {/*    size="2x"*/}
      {/*  />*/}
      {/*</button>*/}
    </div>
  )
}

export default EditorToolbar