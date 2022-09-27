import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import deleteItem from "../CustomHooks/DELETE"
import deleteOne from "../CustomHooks/DELETEONE"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShoppingCart = () => {

    const [data, setData] = useState([])

    let value = []
    data.forEach(item => value.push(item.itemTotalPrice))


    let grandTotal = value.reduce((item, total) => item + total, 0).toFixed(2)

    // const handleDeleteOne = (id) => {
    //     fetch(`http://localhost:4567/deleteOneCartItem/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(() => console.log("success"))
    //         .catch(err => console.log(err))
    // }

    useEffect(() => {
        get("http://localhost:4567/getAllShoppingCartItems", setData)
    }, [])

    return (
        <>
            <h1>Your Cart</h1>
            <h2>Grand Total: ${grandTotal}</h2>
            <Button variant="success" style={{ marginLeft: 45 }}
                onClick={() => {
                    alert(`Order Complete! Your total is: $${grandTotal}`)
                    deleteItem("http://localhost:4567/deleteAllCartItems")
                    window.location.reload()
                }}>Complete Order</Button>

            {data.map(item => {
                return (
                    <Row style={{ display: 'flex' }}>
                        <Col sm="12" md="6" lg="3">
                            <div>
                                <Card style={{
                                    width: '15rem',
                                    border: '1px solid black',
                                    margin: 3,
                                    display: 'inline-block',
                                    backgroundColor: '#FFF0FC',
                                    color: '#5D104D',
                                    boxShadow: '4px 4px'
                                }}>
                                    <Card body key={item.id}>
                                        <div style={{ margin: 5 }} >
                                            <Card.Title style={{ fontSize: 28 }}>Name: {item.itemName}</Card.Title>
                                            <Card.Text style={{ fontSize: 22 }}>Quantity: {item.totalQuantity}</Card.Text>
                                            <Card.Text style={{ fontSize: 22 }}>Total Price: {item.itemTotalPrice}</Card.Text>
                                        </div>
                                        <Button style={{ marginLeft: 25 }}
                                            variant="danger"
                                            onClick={() => {
                                                console.log(item.id)
                                                deleteOne(item.id)
                                                window.location.reload()
                                            }
                                            }>Remove from cart</Button>
                                    </Card>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}
export default ShoppingCart