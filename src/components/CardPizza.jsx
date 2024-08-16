import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Pizzas from "./json/pizzas"
import { useState } from "react";

function CardPizza() {
let copyPizzas = [...Pizzas, "<----copia de las pizzas"]; //con spreed operator se hace copia del arreglo original para poder trabajar con él

//tenemos el cart que debe renderizarse totalmente y el pedido que toma las ordenes del boton
const [pedido, setPedido] = useState([])
const [cart, setCart] = useState([])

const catchPizza = (pizza) => {
  setPedido([...pedido,pizza]);
  setCart([...cart,pizza])
}

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={item.id}>{item.img} - {item.name} - ${item.price}</li>
        ))}
      </ul>
      <div>
        {Pizzas.map(item =>
        <Card style={{ width: "40vh" }} className="pizza">
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title className="pizza_name">{item.name}</Card.Title>
            <div className="ingredientes">
              <h5 className="ingrediente">Ingredientes:</h5>
              {item.ingredients.map((ingredient, i) => (
                  <p key={i}>🍕{ingredient}</p>
                ))}
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><strong>Valor:${item.price}</strong></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">👀Ver Más</Button>{" "}
            <Button variant="success" onClick={()=>catchPizza(item)}>🛒Añadir</Button>{" "}
          </Card.Body>
        </Card>
        )}
      </div>
    </div>
  );
}

export default CardPizza;
