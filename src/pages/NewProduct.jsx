import React, { useEffect, useState } from "react";
import { createProduct, getByIdProduct, updateProduct } from "../api/product";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Loading } from "../components/Loading";

export const NewProduct = () => {
  const [product, setProduct] = useState({
    codigo: "",
    nombre: "",
    cantidad: "",
    precio: "",
  });

  const [loading, setLoading] = useState(false);

  const params = useParams();

  const getById = async () => {
    setLoading(true);
    if (params.id) {
      const response = await getByIdProduct(params.id);
      setProduct({
        codigo: response.codigo,
        nombre: response.nombre,
        cantidad: response.cantidad,
        precio: response.precio,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getById();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (params.id) {
        const data = await updateProduct(params.id, product);
        Swal.fire({
          title: "Actualizacion existosa!",
          html: `<i>Producto <strong>${product.nombre}</strong> actualizado con exito</i>`,
          icon: "success",
        });
      } else {
        const data = await createProduct(product);
        Swal.fire({
          title: "Registro existoso!",
          html: `<i>Producto <strong>${product.nombre}</strong> registrado con exito</i>`,
          icon: "success",
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="card text-bg-dark  shadow"
        style={{ maxWidth: "19rem", width: "19rem" }}
      >
        <div className="card-header">
          {params.id ? `Editar producto ${product.nombre}` : "Nuevo producto"}
        </div>
        {loading ? (
          <div
            className="card-body justify-content-center d-flex"
            style={{ height: "438px" }}
          >
            <Loading colorWhite />
          </div>
        ) : (
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Código</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Ingrese un código"
                  name="codigo"
                  onChange={handleChange}
                  value={product.codigo}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingrese un nombre"
                  onChange={handleChange}
                  value={product.nombre}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  name="cantidad"
                  placeholder="Ingrese una cantidad"
                  onChange={handleChange}
                  value={product.cantidad}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese un precio"
                  name="precio"
                  onChange={handleChange}
                  value={Math.trunc(product.precio)}
                />
                <small className="form-text ">
                  No ingrese caracteres tales como <strong>. ,</strong>
                </small>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                {params.id ? (
                  <button type="submit" className="btn btn-warning">
                    Actualizar
                  </button>
                ) : (
                  <button type="submit" className="btn btn-success">
                    Guardar
                  </button>
                )}
                <Link to={"/"} className="btn btn-danger mx-4">
                  Regresar
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
