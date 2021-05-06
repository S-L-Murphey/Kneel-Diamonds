import { getJewelryTypes, setType } from "./database.js"

const jewelryTypes = getJewelryTypes()

document.addEventListener("change", 
(event)=> {
    const changeEvent = event.target
    if (changeEvent.name === "type") {
        setType(parseInt(changeEvent.value))
        //const [, typeId] = changeEvent.value.split("--")
        //setType(typeId)
    }
})

export const getTypes = () => {
    let html = "<ul>"

    const types = jewelryTypes.map( type => {
        return `<li>
        <input type=radio name="type" value="${type.id}"/> ${type.jewelryTypeName}
        </li>`
    })

    html += types.join("")
    
    html += "</ul>"

    return html
}