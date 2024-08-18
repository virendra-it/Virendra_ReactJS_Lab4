

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { getAllPayeeNames } from "../service/expense-utils"
import { useRef } from 'react';

import { postExpenseItem } from "../service/expense"

const NewExpenseItem = ({ expenseItems }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const uniquePayeeNames = getAllPayeeNames(expenseItems)

    // Ref Hooks
    const expenseDescriptionRef = useRef(null);
    const payeeNameRef = useRef(null);
    const expenseDateRef = useRef(null);
    const priceRef = useRef(null);

    const handleExpenseCreation = async (event) => {

        event.preventDefault()

        // get the values - expenseDescriptiion, payeeName, date, price
        const expenseDescriptionValue = expenseDescriptionRef.current.value
        const payeeNameValue = payeeNameRef.current.value
        const expenseDateValue =
            new Date(expenseDateRef.current.value)
        const priceValue =
            parseFloat(priceRef.current.value)

        const newExpenseItem = {
            expenseDescription: expenseDescriptionValue,
            payeeName: payeeNameValue,
            price: priceValue,
            date: expenseDateValue
        }

        const response = await postExpenseItem(newExpenseItem)
        handleClose();
    }

    function newExpenseItemForm() {

        return (
            <Form onSubmit={handleExpenseCreation}>

                <Form.Group className="mb-3" controlId="expenseDescription">
                    <Form.Label>Expense Description</Form.Label>
                    <Form.Control type="text" placeholder="Expense Description"
                        ref={expenseDescriptionRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="payeeName">
                    <Form.Label>Payee Name</Form.Label>

                    <Form.Select aria-label="Default select example"
                        ref={payeeNameRef}>
                        <option>Select a Payee</option>
                        {
                            uniquePayeeNames.map((payeeName) => {

                                return (
                                    <option value={payeeName}>{payeeName}</option>
                                )
                            })
                        }

                    </Form.Select>

                </Form.Group>

                <Form.Group className="mb-3" controlId="expenseDate">
                    <Form.Label>Expense Date</Form.Label>
                    <Form.Control type="date" ref={expenseDateRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="expensePrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Expense Price"
                        ref={priceRef} />
                </Form.Group>

                <Button variant="primary" type='submit' onClick={handleClose}>
                    Submit
                </Button>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Form>
        );
    }

    function newExpenseModal() {

        return (
            <>
                <Button variant="primary" onClick={handleShow} className='float-end'>
                   Add New Expense Item
                </Button>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton className="bg-primary text-white">
                        <Modal.Title>New Expense</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="bg-light">
                        {
                            newExpenseItemForm()
                        }
                    </Modal.Body>

                </Modal>
            </>
        );
    }


    return (
        <div>
            {
                newExpenseModal()
            }
        </div>
    )
}

export { NewExpenseItem }
