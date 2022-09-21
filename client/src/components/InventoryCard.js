import Card from 'react-bootstrap/Card';

const ItemCard = (props) => {
    return (
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
                    <Card.Title>Name: {props.name}</Card.Title>
                    <Card.Text>Stock: {props.stock}</Card.Text>
                    <Card.Text>Capacity: {props.capacity}</Card.Text>
                </div>

            </Card>
        </Card>
    );
}

export default ItemCard;