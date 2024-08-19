import { useState } from "react";
import CardPizza from "./CardPizza";
import Button from "react-bootstrap/Button";

function Cart() {
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
          <li key={pizza.id} className="text-cart">
            <img
              src={pizza.img}
              style={{ width: "150px", border: "2px solid #000000" }}
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
      <CardPizza catchPizza={catchPizza} />
    </div>
  );
}

export default Cart;

