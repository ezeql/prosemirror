import insertCSS from "insert-css"

insertCSS(`

.ProseMirror-menu-button {
  display: none;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 15px;
  height: 13px;
  cursor: pointer;

  -webkit-transition: top 0.3s ease-out;
  -moz-transition: top 0.3s ease-out;
  transition: top 0.3s ease-out;
}

.ProseMirror-focused .ProseMirror-menu-button {
  display: block;
}

.ProseMirror-menu-button div {
  height: 3px;
  margin-bottom: 2px;
  border-radius: 4px;
  background: #888;
}

.ProseMirror-menu-button:hover div {
  background: #333;
}

`)