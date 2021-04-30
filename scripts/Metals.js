import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        const eventArea = event.target
        if (eventArea.name === "metal") {
            setMetal(parseInt(eventArea.value))
            //window.alert(`User chose metal ${eventArea.value}`)
            //const [, metalId] = eventArea.id.split("--")
            //const metalIdNumber = parseInt(metalId)

            //const findMetal = metals.find(
              //  (metal) => {
                //    return metal.id === metalIdNumber
                //}
            
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

