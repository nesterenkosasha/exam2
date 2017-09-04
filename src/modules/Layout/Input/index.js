import "document-register-element"
import {  EVENT_TYPE_BY_KEYWORD } from "../constants"

export default class InputComponent extends HTMLDivElement {
    static displayName = "input-component"
    static extends = "div"

    constructor(){
        super()
        this.addEventListener("blur", this.onBlur, true)
    }

    /**
     * To render the input component
     * 
     * @return this
     */

     render(){
         this.classList.add("field")
         
         const control = document.createElement("div") 
         control.classList.add("control")

         this.input = document.createElement("input")
         this.input.classList.add("input")
         this.input.type = "text"
         this.input.placeholder = "Keyword"      
         control.appendChild(this.input)
         this.appendChild(control)
         return this
     }


/**
 * To handler a blur event.
 * 
 * @param {Event} event
 * @return void
 */

onBlur = () => {
    event.preventDefault()    
    const { target: { value } } = event
    this.parentNode.dispatchEvent(new CustomEvent( EVENT_TYPE_BY_KEYWORD,{
        detail: {
            value
        }
    })
)
} }
customElements.define(
    InputComponent.displayName,
    InputComponent,
   { extends: InputComponent.extends }
)