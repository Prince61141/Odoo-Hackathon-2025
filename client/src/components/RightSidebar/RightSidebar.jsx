import "./RightSidebar.css"
import Widget from "./Widget"

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Widget type="blog" />
      <Widget type="meta" />
      <Widget type="hot" />
      <Widget type="tags" />
    </aside>
  )
}

export default RightSidebar
