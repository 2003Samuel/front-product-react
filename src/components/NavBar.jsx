import { Link } from "react-router-dom";
import logo from "../assets/logo_principal.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow py-3 px-4">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          {/* Productos */}
          <img src={logo} alt="" width={200} title="Imagen logo" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav">
            <Link to={"/"} className="nav-link">
              Lista de productos
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <Link
              to={"/new"}
              className="btn btn-success col-xs-3 col-sm-4 col-md-3 col-lg-12"
              title="Nuevo Producto"
            >
              Nuevo Producto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
