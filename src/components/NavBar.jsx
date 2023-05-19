import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow py-3 px-4">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          Productos
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarCollapse">
          <div class="navbar-nav">
            <Link to={"/"} className="nav-link">
              Lista de productos
            </Link>
          </div>
          <div class="navbar-nav ms-auto">
            <Link
              to={"/new"}
              className="btn btn-success col-xs-3 col-sm-4 col-md-3 col-lg-12"
            >
              Nuevo Producto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
