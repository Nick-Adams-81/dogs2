import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import deleteItem from "../CustomHooks/DELETE"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShoppingCart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        get("http://localhost:4567/getAllShoppingCartItems", setData)
    }, [])
    return (
        <>
            <h1>Your Cart</h1>
            <Button style={{ marginLeft: 45 }}
                onClick={() => {
                    alert("Order complete!")
                    deleteItem("http://localhost:4567/deleteAllCartItems")
                    window.location.reload()
                }}>Complete Order</Button>
                
            {data.map(item => {
                return (
                    <Row style={{ display: 'flex' }}>
                        <Col sm="12" md="6" lg="3">
                            <div key={item.id}>
                                <Card style={{
                                    width: '12rem',
                                    border: '1px solid black',
                                    margin: 3,
                                    display: 'inline-block',
                                    backgroundColor: '#FFF0FC',
                                    color: '#5D104D'
                                }}>
                                    <Card body>
                                        <div style={{ margin: 5 }}>
                                            <Card.Title>Name: {item.itemName}</Card.Title>
                                            <Card.Text>Cost: {item.totalQuantity}</Card.Text>
                                            <Card.Text>Total Price: {item.itemTotalPrice}</Card.Text>
                                        </div>

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