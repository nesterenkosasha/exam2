import "document-register-element"
import { getImgApi } from "./api"
import { RANDOM_URL, getURLByKeyword } from "./constants"

export default class ImageComponent extends HTMLDivElement {
  static displayName = "image-component"
  static extends = "div"

  constructor() {
    super()
  }

  /**
   * To render the image component.
   * 
   * @return {Promise<ImageComponent>}
   */
  async render(props ={}) {
    const { keyword } = props

    this.classList.add("column", "is-4")
    const card = document.createElement("div")
    card.classList.add("card")

    const cardImg = document.createElement("div")
    cardImg.classList.add("card-image")

    const figureImg = document.createElement("figure")
    figureImg.classList.add("image", "is-4by3")

    const img = new Image()
    img.src = await getImgApi(keyword 
      ? getURLByKeyword(keyword)
      : RANDOM_URL
    )
    img.alt = "Image"
    figureImg.appendChild(img)
    cardImg.appendChild(figureImg)
    card.appendChild(cardImg)
    this.appendChild(card)
    return this
  }
}

customElements.define(
  ImageComponent.displayName,
  ImageComponent, 
  { extends: ImageComponent.extends }
)