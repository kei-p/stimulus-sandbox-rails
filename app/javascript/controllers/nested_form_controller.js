import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [
    "title", "template", "itemContainer", "total", "item"
  ]

  connect() {
    this.titleTarget.textContent = "NestedForm"
    this.add()
  }

  get templateNode() {
    let template = document.createElement('template')
    template.innerHTML = this.templateTarget.innerHTML
    return template.content.cloneNode(true)
  }

  add() {
    this.itemContainerTarget.appendChild(this.templateNode)
    this.render()
  }

  remove(e) {
    const el = e.target
    const item = el.parentNode
    item.parentNode.removeChild(item)
    this.render()
  }

  render() {
    const values = this.itemTargets.map( (el) => parseInt(el.querySelector("input[name$='[number]']").value))
    this.totalTarget.textContent = values.reduce((val, sum) => val + sum)
  }
}
