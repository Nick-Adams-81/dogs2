import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';

const DistributorCard = (props) => {
    return (
        <Card style={{
            width: '12rem',
            border: '1px solid black',
            margin: 3,
            display: 'flex',
            backgroundColor: '#FFF0FC',
            color: '#5D104D'
        }}>
            <Card body>
                <div style={{ margin: 5 }}>
                    <Card.Title>Name: {props.name}</Card.Title>
                    <Card.Text>Cost: {props.cost}</Card.Text>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                        <Form.Control
                            placeholder="item ammount"
                            aria-label="item-ammount"
                            aria-describedby="basic-addon1"
                        />
                        {props.total}
                    </InputGroup>
                </div>

            </Card>
        </Card>
    );
}

export default DistributorCard;