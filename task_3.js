/*

Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopItemBill = laptopPrice*laptopQuantity;
    const tabletItemBill = tabletPrice*tabletQuantity;
    const mobileItemBill = mobilePrice*mobileQuantity;

    const totalBill = laptopItemBill + tabletItemBill + mobileItemBill;
    return totalBill;
}


console.log("Money required for you: ", calculateElectronicsBudget(1,0,0));