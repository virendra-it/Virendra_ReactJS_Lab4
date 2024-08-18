import { getGrandTotalExpenses, getTotalExpenseByPayee, getAllPayeeNames } from "../service/expense-utils"

import Table from 'react-bootstrap/Table';

const ExpenseSummary = ({ expenseItems }) => {

    const payeeNames = getAllPayeeNames(expenseItems)

    const getPendingAmount = (payeeName) => {

        const totalExpenses = getGrandTotalExpenses(expenseItems);

        const totalExpensesByPayee = getTotalExpenseByPayee(expenseItems, payeeName);

        const halfAmount = totalExpenses / 2;

        if (totalExpensesByPayee >= halfAmount) {
            return 0;
        } else {

            return (halfAmount - totalExpensesByPayee);
        }
    }


    const displayTable = () => {


        return (

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="bg-primary text-white">#</th>
                        <th className="bg-primary text-white">Payee</th>
                        <th className="bg-danger text-white">Contributed Amount</th>
                        <th className="bg-warning text-dark">Pending Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payeeNames.map((payeeName, index) => (
                            <tr key={index + 1}>
                                <td className="bg-primary text-white">{index + 1}</td>
                                <td className="bg-primary text-white">{payeeName}</td>
                                <td className="bg-danger text-white">{getTotalExpenseByPayee(expenseItems, payeeName)}</td>
                                <td className="bg-warning text-dark">{getPendingAmount(payeeName)}</td>
                            </tr>
                        ))
                    }




                    <tr>
                        <td></td>
                        <td>Grand Total</td>
                        <td>{getGrandTotalExpenses(expenseItems)}</td>
                        <td></td>
                    </tr>




                </tbody>
            </Table>
        )


    }


    return (
        <div>
            <h2>Expense Summary</h2>
            {
                displayTable()
            }
        </div>
    )
}

export { ExpenseSummary }