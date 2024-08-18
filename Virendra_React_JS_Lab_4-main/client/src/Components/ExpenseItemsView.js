import Table from 'react-bootstrap/Table';

const ExpenseItemsView = ({ expenseItems }) => {
    // Helper function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    function expenseItemsTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="bg-primary text-white">#</th>
                        <th className="bg-secondary text-white">Expense Description</th>
                        <th className="bg-success text-white">Payee Name</th>
                        <th className="bg-danger text-white">Date</th>
                        <th className="bg-warning text-dark">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenseItems.map((expenseItem, index) => {
                            return (
                                <tr key={index}>
                                    <td className="bg-primary text-white">{index + 1}</td>
                                    <td className="bg-secondary text-white">{expenseItem.expenseDescription}</td>
                                    <td className="bg-success text-white">{expenseItem.payeeName}</td>
                                    <td className="bg-danger text-white">{formatDate(expenseItem.date)}</td>
                                    <td className="bg-warning text-dark">{expenseItem.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
    }

    return (
        <div>
            {expenseItemsTable()}
        </div>
    );
}

export { ExpenseItemsView };