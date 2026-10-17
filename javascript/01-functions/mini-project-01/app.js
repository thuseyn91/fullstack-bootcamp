const calculateProductTotal = function (price, quantity){
    if (price>=0 && quantity>0 && typeof price === "number" && typeof quantity === "number" ) { return price * quantity;
    } else {return 'Invail input'}
}

const productTotal = calculateProductTotal(-25, 'm');

const calculateDeliveryFee = productTotal=>{
    if (productTotal>=100) {
        return 0;
    } else {
        return 10;
    }
}



function getOrderStatus(status) {
    switch (status) {
        case 'pending':
            return "Order is pending";
        case 'processing':
            return "Order is being processed";
        case 'shipped':
            return "Order has been shipped";
        case 'delivered':
            return "Order delivered successfully";
    
        default:
            return 'Unknown order status';
    }
};
const orderStatus = getOrderStatus(`processing`);

if (typeof productTotal === 'number') {
    const deliveryFee = calculateDeliveryFee(productTotal);
    const finalPayment = deliveryFee + productTotal;
    console.log(`Order amount: $${productTotal}
Delivery fee: $${deliveryFee}
Final payment: $${finalPayment}
Order status: ${orderStatus}`)
} else {
 console.log(`Error`)
}

