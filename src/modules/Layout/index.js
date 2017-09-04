import "document-register-element"
import RowComponent from "./Row"
import ImageComponent from "./Image"
import InputComponent from "./Input"
import {  EVENT_TYPE_BY_KEYWORD } from "./constants"

export default class LayoutContainer extends HTMLDivElement {
  static displayName = "layout-container"
  static extends = "div"

  constructor() {
    super()
    window.addEventListener("scroll", this.onScroll)
    this.addEventListener( EVENT_TYPE_BY_KEYWORD, this.onByKeyword)
  }

  /**
   * To render the layout container.
   * 
   * @return this
   */
  render() {
    this.classList.add("container", "section")
   this.appendChild(new InputComponent().render())
    for (let i = 1; i <= 3; ++i) 
      this.addRow()
    return this
  }

  /**
   * To add a row with pictures to the layout container.
   * 
   * @return {Promise<this>}
   */
  async addRow() {
    const imgs = await Promise.all([
      this.genImg(), 
      this.genImg(), 
      this.genImg()
    ])
    this.appendChild(this.genRow({ imgs }))
    return this
  }

  /**
   * To generate a new row component.
   * 
   * @param {Objetct} props
   * @return RowComponent
   */
  genRow(props) {
    return new RowComponent().render(props)
  }

  /**
   * To generate a new image component with a picture.
   * 
   * @return {Promise<ImageComponent>}
   */
  async genImg() {
    return await new ImageComponent().render()
  }

  /**
   * Handler of scroll event.
   * 
   * @return {Promise}
   */
  onScroll = async () => {
    const { body: { scrollHeight, scrollTop, clientHeight } } = document
    if (scrollHeight - scrollTop === clientHeight) await Promise.all([ 
      this.addRow(),
      this.addRow()
    ])
  }

  /**
   * Handler of by keyword event.
   * 
   * @return {Promise}
   */
  onByKeyword = ({ detail: { value }}) => {
    this.childNodes.forEach((child, index) => index && this.removeChild(child))
  }
}

customElements.define(
  LayoutContainer.displayName, 
  LayoutContainer, 
  { extends: LayoutContainer.extends }
)