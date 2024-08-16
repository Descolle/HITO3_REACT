import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";

const Navegacion = () => {
  const token = true;
  const total = 25000;

  return (
    <div className="main-container">
      <div>Pizzeria Mamma Mia!</div>
      <div>
        <Button variant="outline-light" className="text-white">
          🍕Home
        </Button>
      </div>
      <div>
        <Button variant="outline-light" className="text-white">
          <image src={token ? lockopen : lock}></image>
          {token ? "Profile" : "Register"}
        </Button>
      </div>
      <div>
        <Button variant="outline-light" className="text-white">
          <image src={token ? lockopen : lock}></image>
          {token ? "LogOut" : "Login"}
        </Button>
      </div>
      <div className="total">
        <div>
          <Button variant="outline-light" className="text-white">
            🛒Total:<a href="#">${total.toLocaleString()}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navegacion;
