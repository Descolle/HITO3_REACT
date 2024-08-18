import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Pizzas from "./json/pizzas";
import { useState } from "react";

function CardPizza() {
  const [cart, setCart] = useState([]);
  const [countPizzas, setCountPizzas] = useState(0);
  const [total, setTotal] = useState(0);

  const catchPizza = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }

    setTotal(total + pizza.price);
    setCountPizzas(countPizzas + 1);
  };

  const removePizza = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      if (existingPizza.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart(cart.filter((item) => item.id !== pizza.id));
      }

      setTotal(total - pizza.price);
      setCountPizzas(countPizzas - 1);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setCountPizzas(0);
  };

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img
              src={pizza.img}
              style={{ width: "150px", border: "2px solid #fff" }}
            />{" "}
            - {pizza.name} - ${pizza.price} x {pizza.quantity}{" "}
            <Button
              variant="danger"
              size="sm"
              onClick={() => removePizza(pizza)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total:</h3>
        <span className="total-pagar">${total.toFixed(2)}</span>
      </div>
      <Button variant="danger" onClick={clearCart} className="clear-all">
        Vaciar Carrito
      </Button>
      <div>
        {Pizzas.map((pizza) => (
          <Card style={{ width: "40vh" }} className="pizza" key={pizza.id}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title className="pizza_name">{pizza.name}</Card.Title>
              <div className="ingredientes">
                <h5 className="ingrediente">Ingredientes:</h5>
                {pizza.ingredients.map((ingredient, i) => (
                  <p key={i}>🍕{ingredient}</p>
                ))}
              </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <strong>Valor: ${pizza.price}</strong>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">👀Ver Más</Button>{" "}
              <Button
                variant="success"
                onClick={() => catchPizza(pizza)}
              >
                🛒Añadir
              </Button>{" "}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardPizza;
