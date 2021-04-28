import { getOrders, getMetals } from "./database.js"



const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} costs ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}













/*
const metals = getMetals()
const orders = getOrders()


// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => { for(const order of orders) {
        return metal.id === order.metalId}
    }
)
/////////////////
const totalCost = foundMetal.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
//////////////////

`<li>
    Order #${order.id} cost ${costString}
</li>`*/