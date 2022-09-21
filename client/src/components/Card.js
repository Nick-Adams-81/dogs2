import Card from 'react-bootstrap/Card';

const ItemCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.cost}</Card.Text>
      </Card>
    </Card>
  );
}

export default ItemCard;