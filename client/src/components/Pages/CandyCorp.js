import React, { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import post from "../CustomHooks/POST"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CandyCorp = () => {

    const [candy, setCandy] = useState([])
    // const [itemTotalPrice, setItemTotalPrice] = useState(0)
    // const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        get("http://localhost:4567/getCandyCorpStock", setCandy)
    }, [])

    let totalQuantity = 0
    let itemTotalPrice = 0
    const handleClick = ({itemName}) => {
        console.log(itemName, totalQuantity, itemTotalPrice)
        post("http://localhost:4567/saveShoppingCartItem", {itemName, totalQuantity, itemTotalPrice})
    }

    const calculateTotalCost = (itemCost, itemAmmount) => (itemCost * itemAmmount).toFixed(2)

    return (

        <div>
            <h1 style={{ marginLeft: 160 }}>Candy Corp</h1>
            {candy.map(item => {
                
                return (
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <div key={item.id}>
                                <Card style={{
                                    width: '12rem',
                                    border: '1px solid black',
                                    marginLeft: 160,
                                    margin: 3,
                                    display: 'inline-block',
                                    backgroundColor: '#FFF0FC',
                                    color: '#5D104D'
                                }}>
                                    <Card body>
                                        <div style={{ margin: 5 }}>
                                            <Card.Title>Name: {item.itemName}</Card.Title>
                                            <Card.Text>Cost: {item.cost} </Card.Text>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                                <Form.Control
                                                    style={{ marginLeft: 20 }}
                                                    placeholder="item ammount"
                                                    aria-label="item-ammount"
                                                    aria-describedby="basic-addon1"
                                                    type="number"
                                                    onChange={(e) => totalQuantity = e.target.value}
                                                />

                                            </InputGroup>
                                        </div>
                                        <Button style={{ marginLeft: 45 }}
                                        
                                            onClick={() => {
                                                // setItemName(item.itemName)
                                                itemTotalPrice = calculateTotalCost(totalQuantity, item.cost)
                                                console.log(itemTotalPrice)
                                                handleClick(item)
                                            }}>Save to cart</Button>
                                    </Card>
                                </Card>

                            </div>
                        </Col>
                    </Row>




                )

            })}


        </div>
    )
}
export default CandyCorp