import { getOrders, getMetals, getSizes, getStyles, getJewelryTypes } from "./database.js"



const buildOrderListItem = (order) => {

    //getting inputs from databases and setting to variable
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getJewelryTypes()

    // Remember that the function you pass to find() must return true/false:
    /* if the metalId of the order equals the primary key of the metal object,
    return true and function stops at the first element that is true*/
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

    const foundType = types.find(
        (type) => {
            return type.id === order.jewelryTypeId
        }
    )
    


    let totalCost = (foundMetal.price + foundSize.price + foundStyle.price)
    
    let myTotalCost = foundType.id >= 3 ? (totalCost * 4) : (foundType.id < 2 ? (totalCost * 1) : totalCost *  2)


    return `<li>
        Order #${order.id} costs $${myTotalCost.toFixed(2)}
    </li>`

}



export const Orders = () => {


    // Can you explain why the state variable (const orders = getOrders()) has to be inside
    // the component function for Orders, but not the others? 


    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


//////
















