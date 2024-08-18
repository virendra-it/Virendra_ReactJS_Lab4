import React, { useEffect, useState } from "react";
import { getAllExpenseItems } from "../service/expense";

import { ExpenseItemsView } from "./ExpenseItemsView"

import { Container } from "react-bootstrap"
import { NewExpenseItem } from "./NewExpenseItem"
import { ExpenseSummary } from "./ExpenseSummary"


const ExpenseSplitterApp = () => {
    const [expenseItems, setExpenseItems] = useState([])

    useEffect(() => {

        const getAllExpenseItemsInvoker = async () => {

            const response = await getAllExpenseItems()
            setExpenseItems(response)
        }

        getAllExpenseItemsInvoker()

    }, [])
    return (
        <Container>

            <h2>Expense Manager Application</h2>

            <NewExpenseItem expenseItems={expenseItems}></NewExpenseItem>

            <ExpenseItemsView expenseItems={expenseItems}></ExpenseItemsView>

            <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>

        </Container>
    )
}
export { ExpenseSplitterApp }