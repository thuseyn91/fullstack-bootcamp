const sales = [10, 25, 15, 40, 30];
// const sales = [];
let total = 0;
let highestSale = sales[0];



if (sales.length ===0) {
    console.log(`No sales available`)
} else {
    for (let i = 0; i < sales.length; i++) {
    total +=sales[i];
    if (sales[i] > highestSale) {
        highestSale = sales[i]
    }

}
let average = total/sales.length;
console.log(`Total revenue: $${total}
    Average sale: $${average}
    Highest sale: $${highestSale}`);
}



