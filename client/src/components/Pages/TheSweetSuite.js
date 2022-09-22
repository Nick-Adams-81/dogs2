import { useState, useEffect } from "react"
import get from "../CustomHooks/GET"
import post from "../CustomHooks/POST"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TheSweetSuite = () => {

    const [sweet, setSweet] = useState([])
    
    useEffect(() => {
        get("http://localhost:4567/getSweetSuiteStock", setSweet)

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
            <h1>The Sweet Suite</h1>
            {sweet.map(item => {
                return (
                    <Row>
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
                                            <Card.Text>Cost: {item.cost}</Card.Text>
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
                                                itemTotalPrice = calculateTotalCost(totalQuantity, item.cost)
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
export default TheSweetSuite
