import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}



renderAllHTML()



