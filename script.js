let orderList = [];
let total = 0;

function addToOrder(name, price) {
    orderList.push({ name, price });
    total += price;
    updateOrder();
}

function updateOrder() {
    const orderListElement = document.getElementById("order-list");
    const totalElement = document.getElementById("total");
    
    orderListElement.innerHTML = '';
    orderList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price}`;
        orderListElement.appendChild(li);
    });

    totalElement.textContent = total;
}

function submitOrder() {
    alert("Your order has been submitted!");
}
