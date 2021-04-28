import { getSizes, setSize } from "./database.js"

const metals = getSizes()

document.addEventListener(
    "change",
    (event) => {
        const eventArea = event.target
        if (eventArea.name === "size") {
            setSize(parseInt(eventArea.value))
            //window.alert(``)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = metals.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

