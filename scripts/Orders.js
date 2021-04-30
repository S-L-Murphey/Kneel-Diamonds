import { getOrders, getMetals, getSizes, getStyles } from "./database.js"



const buildOrderListItem = (order) => {

    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)

    return `<li>
        Order #${order.id} costs $${totalCost.toFixed(2)}
    </li>`

}



export const Orders = () => {

    
       // Can you explain why the state variable has to be inside
        // the component function for Orders, but not the others?
    

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


//////
















