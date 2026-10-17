// const getOrderStatus = status => {
//     switch (status) {
//         case 'pending':
//             return "Order is pending";
//         case 'processing':
//             return "Order is being processed";
//         case 'shipped':
//             return "Order has been shipped";
//         case 'delivered':
//             return "Order delivered successfully";
    
//         default:
//             return 'Unknown order status';
//     }
// };

// 

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

console.log(getOrderStatus('delivered'));