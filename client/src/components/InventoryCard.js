import Card from 'react-bootstrap/Card';

const ItemCard = (props) => {
    return (
        <Card style={{
            width: '15rem',
            border: '1px solid black',
            marginLeft: 160,
            margin: 3,
            display: 'inline-block',
            backgroundColor: '#FFF0FC',
            color: '#5D104D',
            boxShadow: '4px 4px'
        }}>
            <Card body>
                <div style={{ margin: 15 }}>
                    <Card.Title style={{ fontSize: 28 }}>Name: {props.name}</Card.Title>
                    <Card.Text style={{ fontSize: 22 }}>Stock: {props.stock}</Card.Text>
                    <Card.Text style={{ fontSize: 22 }}>Capacity: {props.capacity}</Card.Text>
                </div>

            </Card>
        </Card>
    );
}

export default ItemCard;