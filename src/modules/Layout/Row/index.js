import "document-register-element"

export default class RowComponent extends HTMLDivElement {
  static displayName = "row-component"
  static extends = "div"

  constructor() {
    super()
  }

  /**
   * To render the row component.
   * 
   * @param {Object} props
   * @return {RowComponent}
   */
  render(props) {
    const { imgs } = props
    this.classList.add("columns")
    imgs.forEach(img => this.appendChild(img))
    return this
  }
}

customElements.define(
  RowComponent.displayName, 
  RowComponent, 
  { extends: RowComponent.extends }
)