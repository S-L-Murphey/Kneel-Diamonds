import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        const eventArea = event.target
        if (eventArea.name === "style") {
            setStyle(parseInt(eventArea.value))
            //const [, styleId] = eventArea.id.split("--")
            //const styleIdNumber = parseInt(styleId)

            //const findStyle = styles.find(
              //  (style) => {
                //    return style.id === styleIdNumber
                
            
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map( styleEle => {
        return `<li>
            <input type="radio" name="style" value="${styleEle.id}" /> ${styleEle.style}
        </li>`
    })
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

