import { useState } from "react";
import "./SignUp.css";
import Swal from 'sweetalert2';

const LogIn = ({ abierto, CloseLog }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const inicio = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (contraseña.length > 6) {
      Swal.fire({
        title: "Bienvenido",
        text: "Disfruta de nuestras pizzas hechas con amor",
        imageUrl: "https://img.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe tener más de 6 caracteres",
        icon: "error"
      });
    }
  };

  return (
    <div className={`wrapper modal ${abierto ? "is-open" : ""}`}>
      <form onSubmit={inicio}>
        <h1>Log In</h1>
        <button type="button" className="modal-close" onClick={CloseLog}>
          &times;
        </button>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo"
            required
            onChange={(event) => setUsuario(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(event) => setContraseña(event.target.value)}
          />
        </div>
        <button type="submit" className="registro">
          Iniciar Sesion
        </button>
        <div className="account-exist">
          <a href="#">¿Olvidaste tu Contraseña?</a>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
