import "./index.scss"
import LayoutContainer from "./modules/Layout"

const onLoad = function () {
  document.body.appendChild(new LayoutContainer().render())
}

window.addEventListener("load", onLoad)