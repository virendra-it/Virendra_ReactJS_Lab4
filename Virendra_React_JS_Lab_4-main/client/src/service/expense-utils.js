const getAllPayeeNames = (expenseItems) => {

    const uniquePayeeNames = [];

    expenseItems.forEach((expenseItem) => {

        let payeeName = expenseItem.payeeName;
        if (!uniquePayeeNames.includes(payeeName)) {

            uniquePayeeNames.push(payeeName);
        }
    })

    return uniquePayeeNames;
}

const getTotalExpenseByPayee = (expenseItems, payeeName) => {

    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

        if (expenseItem.payeeName === payeeName) {
            totalExpense += expenseItem.price;
        }
    })
    return totalExpense;
}


const getGrandTotalExpenses = (expenseItems) => {

    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

        totalExpense += expenseItem.price;
    })
    return totalExpense;
}


export { getAllPayeeNames, getTotalExpenseByPayee, getGrandTotalExpenses }